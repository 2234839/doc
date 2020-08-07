<script>
  import { tailwind_svg } from "./res/tailwind.svg.ts";
  const 友链 = [
    {
      title: "神仙散棒槌",
      path: "https://www.zhouguiqiang.com",
    },

    {
      title: "小付同学",
      path: "http://129.204.61.122",
    },
  ];
</script>

<style>
  .row {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }
  .row > * {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1px 6px;
  }
</style>

<footer class="mt-auto mb-0 text-xs">
  <article class="row" title="很棒的朋友">
    {#each 友链 as item}
      <a href={item.path} class="ml-2">{item.title}</a>
    {/each}
  </article>
  <article class="row" title="感谢这些伟大的技术支撑本站">
    <a href="http://vanilla-js.com/">
      <img src="/_themes/vanilla-js.png" alt="" />
    </a>
    <a href="https://tailwindcss.com/">
      {@html tailwind_svg}
    </a>
    <a href="https://svelte.dev/">
      <img class="h-4" src="https://svelte.dev/svelte-logo-horizontal.svg" alt="" />
    </a>
    <a href="https://microsoft.github.io/monaco-editor/">monaco-editor</a>
  </article>
  <footer class="row" title="杂七杂八的东西">
    <span>崮生 • 一些随笔 🎨</span>
    <span>copyright © 2018.11.6 - {new Date().getFullYear()}</span>
    <a href="https://shenzilong.cn/blog/feed">
      rss订阅
      <img class="ml-1 h-3" src="/static/feed.png" alt="rss订阅" />
    </a>
    <a href="http://www.beian.miit.gov.cn">湘ICP备18021783号</a>
  </footer>
</footer>
