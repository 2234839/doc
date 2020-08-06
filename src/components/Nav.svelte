<script>
  export let segment;
  $: decodeSegment = typeof segment === "string" ? decodeURIComponent(segment) : segment;
  const routerList = ["page", "关于", "blog"];
  $: tag = (() => {
    if (decodeSegment === undefined) {
      return undefined;
    } else {
      if (routerList.includes(decodeSegment)) {
        return decodeSegment;
      } else {
        return "blog";
      }
    }
  })();
  // $: console.log("[segment, tag]", segment, tag);
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
    <li>
      <a aria-current={tag === undefined ? 'page' : undefined} href="/">主页</a>
    </li>
    <li>
      <a aria-current={decodeURIComponent(tag) === '关于' ? 'page' : undefined} href="/关于/申子龙.html">关于崮生</a>
    </li>
    <li>
      <a rel="prefetch" aria-current={tag === 'blog' ? 'page' : undefined} href="/blog">博客</a>
    </li>
  </ul>
</nav>
