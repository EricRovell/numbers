<script lang="ts">
	import SVG from "./SVG.svelte";

	export let size = "1em";
	export let fill = "currentColor";
</script>

<SVG
	{...$$props}
	height={size}
	width={size}
	{fill}
	{...$$restProps}
>
	<slot />
</SVG>