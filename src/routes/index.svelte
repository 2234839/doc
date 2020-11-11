<script context="module" lang="ts">
  import { API } from "../lib/api/fetch";

  export async function preload(page: any, session: any) {
    return { user: {}, articleList: await API.获取最近更新() };
  }
</script>

<script lang="ts">
  import { copy } from "../lib/dom操作/复制";
  export let articleList: {
    webPath: string;
    name: string;
  }[];
  const RCrss = API.最新动态_rss();
  export let user: any;
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  .llej-bigImg {
    width: 70%;
    max-width: 600px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
  @font-face {
    font-family: "QIJIC";
    src: url("//webfont.shenzilong.cn/generate_fonts_dynamically.ttf?font=令东齐伋复刻体&text=天行健，君子以自强不息!)")
      format("truetype");
    font-style: normal;
    font-weight: normal;
  }
</style>

<svelte:head>
  <title>崮生 一些随笔</title>
</svelte:head>

<h1 on:click={() => copy('天行健，君子以自强不息!')} class="justify-center" style="font-family: QIJIC">
  天行健，君子以自强不息!
</h1>

<figure class="flex justify-center">
  <img class="llej-bigImg" alt="必应今日美图" src="//shenzilong.cn/util/redirect_to_bing_daily_picture_address" />
</figure>

<p>
  {#if user && user.role === 'admin'}<strong>欢迎尊者归来，愿不忘初心、</strong>{/if}
  <strong>永远前进.</strong>
  <strong>致良知.</strong>
</p>

<h2 class="mt-8">最近更新：</h2>
<div class="flex flex-wrap">
  {#each articleList as article}
    <div class="w-full lg:w-1/5 md:w-1/4 sm:w-1/2"><a href={article.webPath}>{article.name}</a></div>
  {/each}
</div>

{#await RCrss}
  <b class="text-blue-700">正在追踪崮生的踪迹...</b>
{:then rssList}
  <h2 class="mt-8">崮生在其他地方的踪迹：</h2>
  <div class="">
    {#each rssList as rss}
      <div class="mb-3 rounded-lg border py-2">
        <a class="px-2" href={rss.content.webUrl}>{rss.content.title}</a>
        <div class="overflow-y-auto px-2" style="max-height:10rem">
          <div>
            {@html rss.content.des}
          </div>
        </div>
      </div>
    {/each}
  </div>
{:catch e}
  <b>追踪崮生的踪迹失败...</b>
{/await}
