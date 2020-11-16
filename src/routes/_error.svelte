<script context="module" lang="ts">
  import { API } from "../lib/api/fetch";
</script>

<script lang="ts">
  import { stores } from "@sapper/app";
  export let status: number;
  export let error: any;
  const { page } = stores();
  const dev = process.env.NODE_ENV === "development";

  const mayAddress = API.find404Near(decodeURIComponent($page.path));
  mayAddress.then(console.log);
</script>

<style>
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

{#await mayAddress}
  <div>正在查询相似路径...</div>
{:then list}
  <h3>你要找的是下面这些吗？</h3>
  <div class="flex flex-wrap">
    {#each list as item}
      <div class="w-full lg:w-1/5 md:w-1/4 sm:w-1/2"><a href={item.webPath}>{item.name}</a></div>
    {/each}
  </div>
{:catch}
  <div>
    <p>查询相似路径失败...</p>
  </div>
{/await}
<p>或许你还可以通过 <a href="https://shenzilong.cn/关于/申子龙.html#我的联系方式">联系我</a> 来查找相关资料</p>
