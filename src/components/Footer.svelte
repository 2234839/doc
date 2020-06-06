<script>
  import { tailwind_svg } from "./res/tailwind.svg.ts";
  const 友链 = [
    {
      title: "神仙散棒槌",
      path: "https://www.zhouguiqiang.com",
    },

    {
      title: "小付同学",
      // https://www.lihua6.cn
      path: "http://129.204.61.122",
    },
  ];
</script>

<footer class="mt-4">
  <article class="text-center py-2" title="友链">
    {#each 友链 as item}
      <a href={item.path} class="ml-2">{item.title}</a>
    {/each}
  </article>
  <article class="flex justify-center py-2" title="感谢这些伟大的技术支撑本站">
    <a href="http://vanilla-js.com/">
      <img src="/_themes/vanilla-js.png" alt="" />
    </a>
    <a href="https://tailwindcss.com/">
      {@html tailwind_svg}
    </a>
    <a href="https://microsoft.github.io/monaco-editor/">monaco-editor</a>
  </article>
  <footer class="flex justify-center">
    <span>崮生 • 一些随笔 🎨</span>
    <span>copyright © 2018 - {new Date().getFullYear()}</span>
    <a href="https://shenzilong.cn/blog/feed">
      rss订阅
      <img
        class="inline-block"
        style="height: 16px"
        src="/static/feed.png"
        alt="rss订阅" />
    </a>
    <a href="http://www.beian.miit.gov.cn">湘ICP备18021783号</a>
  </footer>
</footer>
