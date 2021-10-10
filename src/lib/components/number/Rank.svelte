<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import styles from "./style.module.css";

	export let value = 0;
	export let index = 0;
	export let radix = 2;

	$: max = value >= radix - 1;
	$: min = value <= 0;

	const dispatch = createEventDispatcher();

	function onChange(increment: number, index: number) {
		if ((increment > 0 && !max) || (increment < 0 && !min)) {
			dispatch("rank-change", {
				value: value + increment,
				index
			});
		}
	}
</script>

<section class={styles.rank}>
	<button on:click={() => onChange(1, index)} disabled={max} class:hidden={max}>
		{Math.min(value + 1, radix)}
	</button>
	<output>
		{value}
	</output>
	<button on:click={() => onChange(-1, index)} disabled={min} class:hidden={min}>
		{Math.max(value - 1, 0)}
	</button>
</section>

<style>
	.hidden {
		color: transparent;
	}
</style>