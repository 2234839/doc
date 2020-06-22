<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import NegativeOneScreen from "../components/负一屏.svelte";
  import { onMount } from "svelte";
  export let segment;

  function beforeunload_handler(e) {
    // console.log(e);
  }
  function handleKeydown(e) {
    // console.log(e);
  }

  onMount(() => {
    fetch("https://at.alicdn.com/t/font_1833190_e91wiqw5v3v.js").then(
      async (r) => {
        eval(await r.text());
      }
    );
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

<svelte:window
  on:beforeunload={beforeunload_handler}
  on:keydown={handleKeydown} />
<NegativeOneScreen />

<main class="llej-body">
  <Nav {segment} />
  <main class="p-10 md:p-3">
    <slot />
  </main>
  <Footer />
</main>
