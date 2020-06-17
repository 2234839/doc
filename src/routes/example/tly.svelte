<script>
  let absolute;
  let alpha = 32;
  let beta = 0;
  let gamma = 45;
  let data = [32, 0, 45];
  function handleOrientation(orientData) {
    absolute = orientData.absolute;
    alpha = orientData.alpha;
    beta = orientData.beta;
    gamma = orientData.gamma;

    // Do stuff with the new orientation data
  }
  setInterval(() => {
    data = [
      (data[0] + 0.2) % 360,
      (data[1] + 0.4) % 360,
      (data[2] + 0.3) % 360,
    ];
  }, 1000 / 26);

  let arr = [
    [0, 1, 2],
    [0, 2, 1],
    [1, 0, 2],
    [1, 2, 0],
    [2, 0, 1],
    [2, 1, 0],
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
  ];
  for (let i = 0; i < 20; i++) {
    arr.push([
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 3),
    ]);
  }
  arr = arr;
</script>

<style>
  .llej-box {
    width: 100px;
    height: 100px;
    background: yellow;
    position: fixed;
    left: 50vw;
    top: 50vh;
  }
</style>

<svelte:window on:deviceorientation={handleOrientation} />

<input bind:value={data[0]} type="range" min="0" max="360" step="1" />
<input bind:value={data[1]} type="range" min="0" max="360" step="1" />
<input bind:value={data[2]} type="range" min="0" max="360" step="1" />

<div
  class="llej-box absolute"
  style="transform:translateX(-50%) translateY(-50%) rotateZ({data[0]}deg)
  rotateX({data[2]}deg) rotateY({data[1]}deg);">
  陀螺仪测试
  <div
    class="absolute w-10 h-10 bg-gray-600"
    style="transform: translate3d(12px, 50%, 3em)" />
  {#each arr as item}
    <div
      class="absolute w-10 h-10 bg-red-600"
      style="transform: translate3d({data[item[0]]}px, {data[item[1]]}px, {data[item[2]]}px);background:rgb({data[item[0]]},
      {data[item[1]]}, {data[item[2]]})" />
  {/each}

</div>
<div>{absolute}</div>
<div>{data[0]}</div>
<div>{data[2]}</div>
<div>{data[1]}</div>
