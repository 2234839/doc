<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let show = false;
	page.subscribe(({ path, params, query }) => {
		// console.log('[path]', path, show);
		if (path !== '/') {
			/** 其他页面首次进来就不弹负一屏了 */
			show = false;
			return;
		}
	});
	onMount(() => {
		const old_time = Number(localStorage.getItem('上次访问时间'));
		const cur_time = Date.now();
		localStorage.setItem('上次访问时间', cur_time.toString());
		if (cur_time - old_time < 24 * 60 * 60 * 1000) {
			show = false;
		} else {
			show = true;
		}
	});
	function showBody() {
		document.querySelector('.llej-body')?.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest'
		});
	}
</script>

{#if show}
	<div
		class="llej-负一屏 h-screen w-full bg-center bg-cover relative flex justify-center sticky top-0"
		style="background-image: url('https://shenzilong.cn/util/redirect_to_bing_daily_picture_address'); "
	>
		<div
			class="font-QIJIC text-white"
			style="margin-top: 40vh;font-size: 6vw;background: #7b7a7a36;display: inline-table;outline: 0.3rem solid
      #ffffffb0;padding: 1vh 6vw;backdrop-filter: blur(8px); margin-top: 40vh; color: rgb(255, 255, 255); "
		>
			崮生 • 一些随笔
		</div>
		<svg
			on:click={showBody}
			class="llej-向下图标 llej_animation-bounce-in-top icon absolute"
			style="margin-top: 70vh;filter: brightness(100);width: 20vw;height: 20vw;max-width: 6rem;"
			aria-hidden="true"
		>
			<use xlink:href="#icon-xiangxia" />
		</svg>
	</div>
{/if}
