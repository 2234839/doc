<script lang="ts">
  export let style:string;
  export let name:string;
</script>

<svg on:click class="icon" aria-hidden="false" {style}>
  <use xlink:href="#{name}" />
</svg>
