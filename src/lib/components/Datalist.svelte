<script lang="ts" context="module">
  interface DatalistItem {
    label?: string;
    value: string | number;
  }
</script>

<script lang="ts">
  export let id: string | undefined = undefined;
  export let options: Array<DatalistItem> = [];
</script>

{#if id && options.length}
	<datalist {id}>
		{#each options as { label, value }}
			<option {value}>{label}</option>
		{/each}
	</datalist>
{/if}