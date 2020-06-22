<script>
  let username = "";
  let password = "";
  function login() {
    fetch(`/blog/user/login?requester=sapper`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "content-type": "application/json",
      },
    }).then(async (r) => {
      const a = await r.json();
      console.log("r", a);
    });
  }
</script>

<svelte:head>
  <title>博客登录 - 崮生</title>
</svelte:head>
<div class="mx-auto mt-5 flex flex-col max-w-xs items-center border px-4 py-10">
  <input class="border" type="text" bind:value={username} />
  <input class="border mt-3" type="password" bind:value={password} />
  <button class="btn w-1/3 mt-4" on:click={() => login()}>登录</button>
</div>
