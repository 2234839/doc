<script context="module">
  import { preload as p1 } from "../lib/path.ts";
  export const preload = p1;
</script>

<script>
  import { onMount } from "svelte";
  export let article;
  export let title;
  export let menu;
  onMount(async () => {
    import("../../_themes/article.ts").then((r) => {
      let old = undefined;
      setInterval(
        /** 监听内容变化了，应为此页面为所有文档的模板，所以切换文章不会重新执行这儿的 script 故需要自己监听 */ () => {
          if (old !== article) {
            r.run(article);
            old = article;
          }
        },
        25,
      );
    });
  });
</script>

<svelte:head>
  <title>{title} - 崮生</title>
</svelte:head>

{#if menu}
  <ul>
    {#each menu as post}
      <li>
        <a rel="prefetch" href={post.path}>{post.title}</a>
      </li>
    {/each}
  </ul>
{:else if article}
  {@html article.html}
{/if}