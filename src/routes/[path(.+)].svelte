<script context="module" lang="ts">
  //@ts-ignore
  import { preload as p1 } from "../lib/path.ts";
  export const preload = p1;
</script>

<script>
  import { onMount } from "svelte";
  export let article;
  export let title;
  export let menu;

  if (article) {
    onMount(async () => {
      console.log("开始加载 article");
      import("../../_themes/article.ts").then((r) => {
        console.log(r);
        r.run();
      });
    });
  }

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
{/if}
{#if article}
  {@html article.html}
{/if}
