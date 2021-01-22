<script lang="ts">
    import GlobalSearch from "./global-search.svelte";
    let show = false
</script>
<div on:click={()=>show=true}>
    搜索
</div>
<GlobalSearch bind:show />