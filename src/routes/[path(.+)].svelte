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

  let breadcrumbNavigation = [] as string[];
  function 生成面包屑url(index: number) {
    return (
      breadcrumbNavigation
        .slice(0, index + 1)
        .map((el) => el)
        .join("/") + (index !== breadcrumbNavigation.length - 1 ? "/" : "")
    );
  }

  onDestroy(() => {
    if (typeof document !== "undefined") {
      /** 动态生成的元素没有被svelte清除掉，所以这里主动将遗留下来的元素清掉 */
      document
        .querySelectorAll(".run-code,.g-editor_div")
        .forEach((el) => el.remove());
    }
  });

  onMount(async () => {
    console.log("触发 [path(.+)] onMount");
    console.log(document.body.classList);
    let old = null as any;
    on(document.body, "click", "a", (e, el) => {
      const a = el as HTMLAnchorElement;
      const path = a.href.split("#")[0].toLowerCase();
      const path2 = location.href.split("#")[0].toLowerCase();
      console.log(path, path2, path === path2);
      if (
        /** 当前页面的链接不跳转 */
        path === path2 &&
        /** 单纯的 hash 跳转是允许的 */
        !(a.getAttribute("href") || "").startsWith("#")
      ) {
        e.preventDefault();
      }
    });
    //@ts-ignore
    page.subscribe(({ path, params, query }) => {
      breadcrumbNavigation = decodeURIComponent(path).split("/");
      if (old !== article?.html) {
        render();
        if (article?.html) {
          old = article?.html;
        }
      }
    });

    function render() {
      console.log("触发 render");

      // run();
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
        // MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
      }
    }
  });
  function scrollIntoSelector(selector: string) {
    /** 滚动到该块 */
    document.querySelector(selector)?.scrollIntoView(true);
  }
</script>

<style>
  .c-bread {
  }
</style>

<svelte:head>
  <title>{title} - 崮生</title>
</svelte:head>
{#if breadcrumbNavigation.length > 1}
  <nav class="flex text-sm mt-1" title="当前页的父目录">
    {#each breadcrumbNavigation as nav, index}
      <a
        class="c-bread bg-red-100 px-1 rounded-sm"
        style="margin-right:0px"
        href={生成面包屑url(index)}>{nav}{#if index < breadcrumbNavigation.length - 1}/{/if}</a>
    {/each}
  </nav>
{/if}

{#if menu}
  <ul>
    {#each menu as post}
      <li><a rel="prefetch" href={post.path}>{post.title}</a></li>
    {/each}
  </ul>
{:else if article}
  {@html article.html}
{/if}

<blockquote class="mt-4 text-sm">
  <p>
    by 崮生 from <a href="https://shenzilong.cn">崮生 • 一些随笔 🎨</a>
    <br />
    <a href={$page.path}>本文</a>欢迎分享与聚合，全文转载未经授权（ <a
      class="c-block-ref"
      href="//shenzilong.cn/%e5%85%b3%e4%ba%8e/%e7%94%b3%e5%ad%90%e9%be%99.html#20201228124011-yky6n68">联系我</a>）不许可。
  </p>
</blockquote>
