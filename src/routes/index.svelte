<script context="module">
  export async function preload(page, session) {
    const { user } = session;
    return { user };
  }
</script>

<script>
  import { copy } from "../lib/dom操作/复制.ts";
  export let user;
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

<h1 on:click={() => copy('天行健，君子以自强不息!')} style="font-family: QIJIC">天行健，君子以自强不息!</h1>

<figure class="flex justify-center">
  <img class="llej-bigImg" alt="必应今日美图" src="//shenzilong.cn/util/redirect_to_bing_daily_picture_address" />
</figure>

<p>
  {#if user && user.role === 'admin'}
    <strong>欢迎尊者归来，愿不忘初心、</strong>
  {/if}
  <strong>永远前进.</strong>
</p>
