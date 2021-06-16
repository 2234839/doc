<script lang="ts">
	import { onMount } from 'svelte';

	let show = false;
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
			class="font-QIJIC text-white "
			style="margin-top: 40vh;font-size: 6vw;background: #7b7a7a36;display: inline-table;outline: 0.3rem solid
      #ffffffb0;padding: 1vh 6vw;backdrop-filter: blur(8px);color: rgb(255, 255, 255); "
		>
			崮生 • 一些随笔
		</div>
		<svg
			on:click={showBody}
			class="llej-向下图标 animate-bounce icon absolute"
			style="margin-top: 70vh;filter: brightness(100);width: 30vw;height: 20vw;max-width: 6rem;"
			aria-hidden="true"
		>
			<use xlink:href="#icon-xiangxia" />
		</svg>
	</div>
{/if}
