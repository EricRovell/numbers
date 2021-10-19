<script lang="ts">
	export let title: string | undefined =  undefined;
	export let viewBox = "0 0 100 100";
	export let svg: string | undefined = undefined;
	export let path: string | undefined = undefined;
	export let paths: string[] | undefined = undefined;
	export let width: string | undefined  = undefined;
	export let height: string | undefined  = undefined;
	export let stroke: string | undefined = undefined;
	export let fill: string | undefined = undefined;
</script>

<svelte:options namespace="svg" />

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  {viewBox}
	{stroke}
	{fill}
  aria-labelledby={title}
	{...$$restProps}>
		{#if title}
			<title>{title}</title>
		{/if}
    {#if svg}
      <g>
        {@html svg}
      </g>
    {/if}
		{#if path}
			<path d={path} />
		{/if}
		{#if paths}
			{#each paths as path}
				<path d={path} />
			{/each}
		{/if}
		<g>
			<slot />
		</g>
</svg>