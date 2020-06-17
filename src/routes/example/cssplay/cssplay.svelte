<script>
  const value_map = {
    "justify-content":
      "start,flex-start,flex-end,center,left,right,baseline,first baseline,last baseline,space-between,space-around,space-evenly,stretch,safe,unsafe",
  };
  function 循环() {
    // 利用这个循环来更新值
    const r = {};
    config.forEach((el) => {
      r[el.ref] = el.value;
    });
    s = r;
    requestAnimationFrame(循环);
  }
  function test(s) {
    const r = {};
    for (let k in s) {
      config.push({
        ref: k,
        config: s[k],
        value: s[k].default,
      });
    }
    return r;
  }

  let config = [];
  let s = test({
    color: { default: "#009345", type: "color" },
    size: { default: 20, type: "range", max: 100, min: 0 },
    width: { default: 20, type: "range", max: 100, min: 0 },
    select: {
      default: "马云",
      type: "select",
      items: [
        "小猫",
        "anny",
        "杰克马",
        { name: "我对钱没有兴趣", value: "马云" },
      ],
    },
    justifyContent: {
      default: "start",
      type: "select",
      items: value_map["justify-content"].split(","),
    },
  });
  循环();

  $: item_style = `background:${s.color};width:${s.width}px;height:${s.width}px`;
</script>

<h1 style="color:{s.color};font-size:{s.size}px">
  Hello {s.select}! {s.color}
</h1>
<div
  style="display:flex;width:100%;justify-content:{s.justifyContent};border:red
  1px solid;">
  <div style={item_style} />
  <div style={item_style} />
  <div style={item_style} />
  <div style={item_style} />
  <div style={item_style} />
</div>
<div>{s.picker}</div>
{#each config as item, key}
  <div>
    ref : {item.ref}
    {#if item.config.type === 'color'}
      <input bind:value={item.value} type="color" />
    {:else if item.config.type === 'range'}
      <input
        bind:value={item.value}
        min={item.config.min}
        max={item.config.max}
        type="range" />
    {:else if item.config.type === 'select'}
      <select bind:value={item.value}>
        {#each item.config.items as el}
          {#if typeof el === 'object'}
            <option value={el.value}>{el.name}</option>
          {:else}
            <option value={el}>{el}</option>
          {/if}
        {/each}
      </select>
    {:else}
      <b>未定义的值</b>
    {/if}
  </div>
{/each}
