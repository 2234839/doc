<script>
	import { showMessageForAWhile_actions } from '../../data/actions/showMessage.ts';
	let username = '';
	let password = '';
	function login() {
		fetch(`/blog/user/login?requester=sapper`, {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: {
				'content-type': 'application/json'
			}
		}).then(async (r) => {
			const res = await r.json();
			if (res.code === -1) {
				showMessageForAWhile_actions({ content: res.msg, status: 'fail' });
			} else {
				showMessageForAWhile_actions({ content: res.msg, status: 'ok' });
			}
		});
	}
</script>

<svelte:head>
	<title>博客登录 - 崮生</title>
</svelte:head>
<div class="m-auto mt-20 flex flex-col max-w-xs items-center border px-4 py-10 shadow-md">
	<input class="border" type="text" bind:value={username} />
	<input
		class="border mt-3"
		type="password"
		bind:value={password}
		on:keydown={(e) => {
			if (e.keyCode === 13) {
				login();
			}
		}}
	/>
	<button class="btn w-1/3 mt-4" on:click={() => login()}>登录</button>
</div>
