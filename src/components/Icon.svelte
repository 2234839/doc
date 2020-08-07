<script>
  export let style;
  export let name;
</script>

<svg on:click class="icon" aria-hidden="false" {style}>
  <use xlink:href="#{name}" />
</svg>
