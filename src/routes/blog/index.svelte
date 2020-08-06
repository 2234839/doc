<script context="module">
  const toDay = new Date();

  export function preload({ params, query }) {
    return {
      posts: [
        {
          path: `/record/每日总结/${toDay.getFullYear()}/${toDay.getMonth() + 1}月.html`,
          title: `这个月的每日总结（${toDay.getFullYear()}-${toDay.getMonth() + 1}）`,
        },
        { path: "/record/每日总结/2020/", title: "每日总结-2020" },
        { path: "/record/", title: "全部文档" },
      ],
    };
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>博文</h1>

<ul>
  {#each posts as post}
    <li>
      <a rel="prefetch" href={post.path}>{post.title}</a>
    </li>
  {/each}
</ul>

<h2>管理</h2>
<ul>

  <li>
    <a rel="prefetch" href="/blog/edit">编辑</a>
  </li>
  <li>
    <a rel="prefetch" href="/blog/login">登录</a>
  </li>
</ul>
