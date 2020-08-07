<script>
  import { onMount } from "svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import NegativeOneScreen from "../components/负一屏.svelte";
  import G_Message from "../components/Message/g-message.svelte";
  import { messageList } from "../data/store/store.ts";

  export let segment;

  function beforeunload_handler(e) {
    // console.log(e);
  }
  function handleKeydown(e) {
    // console.log(e);
  }

  onMount(() => {
    /** 加载阿里的字体工具 */
    fetch("https://at.alicdn.com/t/font_1833190_kk81z9186w.js").then(async (r) => {
      const code = await r.text();
      console.log("[      code]", code);
      eval(code);
    });
  });
</script>

<style>
  .llej-body {
    position: relative;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
    z-index: 10;
    width: 100vw;
    height: 100vh;
  }
</style>

<svelte:window on:beforeunload={beforeunload_handler} on:keydown={handleKeydown} />
<NegativeOneScreen />
<G_Message
  bind:messageList={$messageList}
  on:del={(el) => {
    el.detail.hide();
  }} />
<main class="llej-body flex flex-col">
  <Nav {segment} />
  <main class="p-10 md:p-6">
    <slot />
  </main>
  <Footer />
</main>
