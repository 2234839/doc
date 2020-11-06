<script context="module" lang="ts">
  import { preload as p1 } from "../lib/path";
  export const preload = p1;
</script>

<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  export let article: any;
  export let title: string;
  export let menu: any[];
  import { run } from "../lib/article";
  onDestroy(() => {
    if (typeof document !== "undefined") {
      /** 动态生成的元素没有被svelte清除掉，所以这里主动将遗留下来的元素清掉 */
      document.querySelectorAll(".run-code").forEach((el) => el.remove());
    }
  });

  onMount(async () => {
    let old = undefined as any;
    render();

    setInterval(
      /** 监听内容变化了，因为此页面为所有文档的模板，所以切换文章不会重新执行这儿的 script 故需要自己监听 */ () => {
        if (old !== article) {
          render();
        }
      },
      25,
    );
    function render() {
      run();
      old = article;

      /** 对公式块的内容进行重写，让他能够被 mathjax 所匹配到 */
      document.querySelectorAll("span.vditor-math").forEach((el) => {
        el.textContent = "$" + el.textContent + "$";
      });
      document.querySelectorAll("div.vditor-math").forEach((el) => {
        el.textContent = "$$\n" + el.textContent + "\n$$";
      });
    }
  });
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
