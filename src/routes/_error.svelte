<script context="module" lang="ts">
  import { API } from "../lib/api/fetch";
</script>

<script lang="ts">
  import { stores } from "@sapper/app";
  export let status: number;
  export let error: any;
  if (error.message === "Not found") {
    /** 补丁，因为服务端对非200的请求会去请求另外一个服务所以path.ts 中将 404 以 200 的状态码传递了过来，所以这里再转回去 */
    status = 404;
  }
  const { page } = stores();
  const dev = process.env.NODE_ENV === "development";

  const mayAddress = API.find404Near(decodeURIComponent($page.path));
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

<h1 class="text-red-800">{status}</h1>

<p>{error.message}</p>
<p>对于一些资源页面，例如某某网页备份这里 404 可以尝试再刷新一遍</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

{#await mayAddress}
  <div>正在查询相似路径...</div>
{:then list}
  <h3>你要找的是下面这些吗？</h3>
  <div class="flex flex-wrap">
    {#each list as item}
      <div class="w-full lg:w-1/5 md:w-1/4 sm:w-1/2">
        <a href={item.webPath}>{item.name}</a>
      </div>
    {/each}
  </div>
{:catch}
  <div>
    <p>查询相似路径失败...</p>
  </div>
{/await}
<p>
  或许你还可以通过 <a
    href="https://shenzilong.cn/关于/申子龙.html#我的联系方式">联系我</a> 来查找相关资料
</p>
