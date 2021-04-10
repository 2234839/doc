<!--
    因为 sapper 还不能重置布局 https://github.com/sveltejs/kit/issues/626
    所以这里先临时的使用 hack 方法让上层布局不可见
-->
<div class="c-layout">
  <slot />
</div>

<style>
  .c-layout {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vh;
    background-color: aliceblue;
  }
</style>
