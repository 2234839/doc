<script context="module">
  export function preload({ params, query }) {
    return { posts: [{ path: "/record/", title: "文档" }] };
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
