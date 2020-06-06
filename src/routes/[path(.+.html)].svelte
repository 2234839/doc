<script context="module" lang="ts">
  //@ts-ignore
  import { preload as p1 } from "../lib/path.ts";
  export const preload = p1;
</script>

<script>
  import { onMount } from "svelte";
  export let html;
  export let title;

  onMount(async () => {
    console.log("开始加载 article");
    //@ts-ignore
    import("../../_themes/article.ts").then((r) => {
      console.log(r);
      r.run();
    });
    // console.log(article_js);
    // article_js.run();
  });
  console.log(222222);
</script>

<svelte:head>
  <title>{title} - 崮生</title>
</svelte:head>

{@html html}
