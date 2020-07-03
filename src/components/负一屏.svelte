<script>
  import { onMount } from "svelte";
  import { goto, stores } from "@sapper/app";
  const { page } = stores();
  let show = false;
  let 负一屏 = null;
  onMount(() => {
    负一屏 = document.querySelector(".llej-负一屏");
    page.subscribe(({ path, params, query }) => {
      const old_time = Number(localStorage.getItem("上次访问时间"));
      const cur_time = Date.now();
      localStorage.setItem("上次访问时间", cur_time);
      if (cur_time - old_time < 24 * 60 * 60 * 1000) {
        show = false;
      } else {
        show = true;
      }
    });
  });
  function toDown() {
    document.documentElement.scrollTop = 负一屏.offsetHeight;
  }
</script>

<style>
  .llej_animation-bounce-in-top {
    animation: bounce-in-top 3s infinite both;
  }

  @keyframes bounce-in-top {
    0% {
      transform: translateY(-100px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 0.8;
    }
    55% {
      transform: translateY(-65px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateY(-28px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateY(-8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }

  .font-QIJIC {
    font-family: QIJIC;
  }
  @font-face {
    font-family: "QIJIC";
    src: url("//webfont.shenzilong.cn/generate_fonts_dynamically.ttf?font=令东齐伋复刻体&text=崮生•一些随笔)")
      format("truetype");
    font-style: normal;
    font-weight: normal;
  }
</style>

{#if show}
  <div
    class="llej-负一屏 h-screen w-full bg-center bg-cover relative flex
    justify-center sticky top-0"
    style=" background-image:
    url(&quot;https://shenzilong.cn/util/redirect_to_bing_daily_picture_address&quot;);
    ">
    <div
      class="font-QIJIC text-white"
      style="margin-top: 40vh;font-size: 6vw;background:
      #7b7a7a36;display: inline-table;outline: 0.3rem solid #ffffffb0;padding:
      1vh 6vw;backdrop-filter: blur(8px);
      margin-top: 40vh;
      color: rgb(255, 255, 255);
      ">
      崮生 • 一些随笔
    </div>
    <svg
      on:click={toDown}
      class="llej-向下图标 llej_animation-bounce-in-top icon absolute"
      style="margin-top: 70vh;filter: brightness(100);width: 20vw;height:
      20vw;max-width: 6rem;"
      aria-hidden="true">
      <use xlink:href="#icon-xiangxia" />
    </svg>
  </div>
{/if}
