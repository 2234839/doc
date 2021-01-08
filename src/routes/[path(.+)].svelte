<script context="module" lang="ts">
  import { preload as p1 } from "../lib/path";
  export const preload = p1;
  declare var md2website: any;
</script>

<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { stores, goto } from "@sapper/app";
  import { on } from "../lib/dom操作/event_listener";
  import { API } from "../lib/api/fetch";
  import qs from "qs";
  const { page } = stores();
  export let article: any;
  export let title: string;
  export let 访问记录: typeof API.get访问记录.res;
  export let menu: any[];
  $: breadcrumbNavigation = decodeURIComponent($page.path).split("/");

  function 生成面包屑url(index: number) {
    return (
      breadcrumbNavigation
        .slice(0, index + 1)
        .map((el) => el)
        .join("/") + (index !== breadcrumbNavigation.length - 1 ? "/" : "")
    );
  }
  let praise = Promise.resolve(访问记录.praise);

  function giveALike() {
    praise = API.点赞($page.path);
  }

  /** 需要在销毁前调用的函数 */
  let destroyCallBack = [] as Function[];
  onDestroy(() => {
    if (typeof document !== "undefined") {
      /** 动态生成的元素没有被svelte清除掉，所以这里主动将遗留下来的元素清掉 */
      document
        .querySelectorAll(".run-code,.g-editor_div")
        .forEach((el) => el.remove());
    }
    destroyCallBack.forEach((el) => el());
  });

  onMount(async () => {
    console.log("触发 [path(.+)] onMount");
    console.log(document.body.classList);
    let old = null as any;

    destroyCallBack.push(on(document.body, "click", "a", aSupper));

    setTimeout(async () => {
      while (1) {
        if (typeof md2website !== "undefined") {
          md2website.gotoClick = (e: Event) => {
            aSupper(e, e.target! as HTMLElement);
          };
          break;
        } else {
          await new Promise((s) => setTimeout(s, 10));
        }
      }
    });

    page.subscribe(() => {
      if (old !== article?.html) {
        render();
        if (article?.html) {
          old = article?.html;
        }
      }
    });

    function render() {
      console.log("触发 render");
      adHTML+=""
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
    }
  });
  function scrollIntoSelector(selector: string) {
    /** 滚动到该块 */
    document.querySelector(selector)?.scrollIntoView(true);
  }

  function aSupper(e: Event, el: HTMLElement) {
    const a = el as HTMLAnchorElement;
    const path = a.href.split("#")[0].toLowerCase();
    const path2 = location.href.split("#")[0].toLowerCase();
    console.log(
      "[path]",
      path === path2,
      a.getAttribute("href") || "",
      decodeURIComponent(path)
    );
    if (
      /** 当前页面的链接不跳转 */
      path === path2
    ) {
      if (
        /** 单纯的 hash 跳转是允许的 */
        (a.getAttribute("href") || "").startsWith("#")
      ) {
        // 浏览器本身应当已经实现通过 hash 跳转对应 id 的元素
      } else {
        e.preventDefault();
      }
    } else {
      goto(a.href);
      e.preventDefault();
    }
  }
  let adHTML = `
  <!-- 谷歌 底部横幅广告  -->
  <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-7181140659254262"
      data-ad-slot="4668486093"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
<${"/"}script>`;
</script>

<svelte:head>
  <title>{title} - 崮生</title>
</svelte:head>
<div class="flex justify-between mb-4">
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

  <div class="flex text-sm text-red-400">
    <div title="浏览器运行时js上报次数">b {访问记录.browser_js_count}</div>,
    <div title="本文被博客程序读取的次数">r {访问记录.readCount}</div>,
    {#await praise}
      <div>❤ 正在询问中</div>
    {:then n}
      <div title="喜欢数，点击 +1" on:click={giveALike}>❤ {n}</div>
    {/await}
  </div>
</div>

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
    by 崮生 from <a href="https://shenzilong.cn">崮生 • 一些随笔 🎨</a>,欢迎 <a href="https://afdian.net/@llej0" title="真的是非常感谢 ヾ(≧▽≦*)o">赞助本文</a>
    <br />
    <a href={$page.path}>本文</a>欢迎分享与聚合，全文转载未经授权（ <a
      class="c-block-ref"
      href="//shenzilong.cn/%e5%85%b3%e4%ba%8e/%e7%94%b3%e5%ad%90%e9%be%99.html#20201228124011-yky6n68">联系我</a>）不许可。
  </p>
</blockquote>

{@html adHTML}
