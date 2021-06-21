<script lang="ts">
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { createEventDispatcher } from 'svelte';
	import Icon from '../Icon.svelte';

	const dispatch = createEventDispatcher();
	export let messageList: { style: string; dot?: { c: string }; content: string }[];
</script>

<div class="llej-msg_list">
	{#each messageList as item, index (index)}
		<div
			animate:flip
			transition:fly={{ x: 200, duration: 1000 }}
			class="llej-msg_list-item"
			style={item.style}
		>
			<div
				class="llej-msg_list-item-dot"
				style="--c:{item.dot && item.dot.c ? item.dot.c : '#367dd9'}"
			/>
			{item.content}
			<Icon on:click={() => dispatch('del', item)} name="icon-guanbi" style="height:6px;" />
		</div>
	{/each}
</div>

<style>
	.llej-msg_list {
		position: fixed;
		top: 20px;
		right: 20px;
		z-index: 9998;
	}
	.llej-msg_list-item {
		background: #fff;
		box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
		margin: 6px 12px;
		padding: 3px 7px;
		display: flex;
		align-items: center;
	}
	.llej-msg_list-item-dot {
		--c: #367dd9;
		--s: 4px;
		width: var(--s);
		height: var(--s);
		background-color: var(--c);
		margin: var(--s);
		border-radius: 999px;
	}
</style>
