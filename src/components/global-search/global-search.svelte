<script lang="ts">
	export let searchStr = '';
	export let show = false;

	$: iframeSrc = `https://www.baidu.com/results?q=site%3Ashenzilong.cn+${encodeURIComponent(
		searchStr
	)}`;
</script>

<div
	style="display:{show ? '' : 'none'}"
	on:click={() => (show = false)}
	class="fixed z-20 left-0 top-0 bg-gray-600 bg-opacity-75 w-screen h-screen
    flex justify-center items-center"
>
	<iframe
		on:click={(e) => e.preventDefault()}
		class="w-3/5 sm:w-4/5 bg-white rounded-lg"
		style="height:80vh"
		src={iframeSrc}
		frameborder="0"
		title="全站搜索"
	/>
</div>
