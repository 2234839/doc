<script context="module" lang="ts">
  import { preload as p1 } from "../lib/path";
  export const preload = p1;
  declare const MathJax: any;
</script>

<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { stores } from "@sapper/app";
  import { on } from "../lib/dom操作/event_listener";
  import { run } from "../lib/article";
  import qs from "qs";
  const { page } = stores();
  export let article: any;
  export let title: string;
  export let menu: any[];
  onDestroy(() => {
    if (typeof document !== "undefined") {
      /** 动态生成的元素没有被svelte清除掉，所以这里主动将遗留下来的元素清掉 */
      document.querySelectorAll(".run-code,.g-editor_div").forEach((el) => el.remove());
    }
  });

  onMount(async () => {
    // console.log("触发 [path(.+)] onMount");

    let old = null as any;
    on(document.body, "click", "a", (e, el) => {
      /** 在当前页面反复点击指向同页面的 a 标签的时候 */
      const p = qs.parse(el.getAttribute("href") || "");
      if (p.blockId) {
        scrollIntoSelector(`[data-block-id="${p.blockId}"]`);
      }
    });
    //@ts-ignore
    page.subscribe(({ path, params, query }) => {
      if (old !== article?.html) {
        render();
        if (article?.html) {
          old = article?.html;
        }
      }
    });

    function render() {
      console.log("触发 render");

      run();
      const p = qs.parse(location.href);

      if (p.blockId) {
        setTimeout(() => {
          scrollIntoSelector(`[data-block-id="${p.blockId}"]`);
        }, 500);
      }

      /** 对公式块的内容进行重写，让他能够被 mathjax 所匹配到 */
      document.querySelectorAll("span.vditor-math").forEach((el) => {
        el.textContent = "$" + el.textContent + "$";
      });
      document.querySelectorAll("div.vditor-math").forEach((el) => {
        el.textContent = "$$\n" + el.textContent + "\n$$";
      });
      /** 重新触发渲染 */
      if (typeof MathJax !== "undefined") {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
      }
    }
  });
  function scrollIntoSelector(selector: string) {
    /** 滚动到该块 */
    document.querySelector(selector)?.scrollIntoView(true);
  }
</script>

<svelte:head>
  <title>{title} - 崮生</title>
</svelte:head>

{#if menu}
  <ul>
    {#each menu as post}
      <li><a rel="prefetch" href={post.path}>{post.title}</a></li>
    {/each}
  </ul>
{:else if article}
  {@html article.html}
{/if}
