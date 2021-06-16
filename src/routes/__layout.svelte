<script lang="ts">
	import { onMount, beforeUpdate } from 'svelte';
	import { page } from '$app/stores';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import StyleSheet from '../components/style_sheet.svelte';
	import NegativeOneScreen from '../components/负一屏.svelte';
	import G_Message from '../components/Message/g-message.svelte';
	import { messageList } from '../data/store/store';
	import { API } from '../lib/api/fetch';

	onMount(() => {
		/** 加载阿里的字体工具 */
		fetch('https://at.alicdn.com/t/font_1833190_kk81z9186w.js').then(async (r) => {
			const code = await r.text();
			window.eval(code);
		});
	});
	let href = '';
	beforeUpdate(() => {
		if (href !== location.href) {
			href = location.href;
			API.踩一踩(decodeURIComponent(location.pathname), true);
		}
	});

</script>

<StyleSheet />
{#if $page.path==="/"}
 <NegativeOneScreen />
{/if}
<G_Message
	bind:messageList={$messageList}
	on:del={(el) => {
		el.detail.hide();
	}}
/>
<main class="llej-body flex flex-col">
	<Nav />
	<main class="pt-3 px-3">
		<slot />
	</main>
	<Footer />
</main>

<style>
	.llej-body {
		position: relative;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
		z-index: 10;
		height: 100vh;
	}
</style>
