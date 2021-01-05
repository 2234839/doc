<script lang="ts">
  export let segment: string;
  $: decodeSegment = decodeURIComponent(segment || "");
  // $: console.log("[segment] 2", decodeSegment);
  const routerList = [
    { title: "主页", link: "/" },
    { title: "关于崮生", link: "/关于/申子龙.html" },
    { title: "博客", link: "/blog" },
    { title: "在线工具", link: "/工具/在线工具.html" },
  ];

  $: 一级选中 = routerList.find((el) => el.link.split("/")[1] === decodeSegment) || routerList[2];
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    {#each routerList as router}
      <li><a aria-current={一级选中 === router || undefined} rel="prefetch" href={router.link}>{router.title}</a></li>
    {/each}
  </ul>
</nav>
