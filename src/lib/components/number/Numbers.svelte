<script context="module" lang="ts">
	interface MutatedNumber {
		ranks: number[];
		radix: number;
	}
</script>

<script lang="ts">
	import Number from "./Number.svelte";
	import { radix as createRadix } from "@core/radix";
	import type { Radix, RadixOptions, RanksInput } from "@core/radix";
	import styles from "./style.module.css";

	export let ranks: RanksInput = [ 0 ];
	export let baseRadix = 10;
	export let options: RadixOptions = {};
	export let radixes = [ 10, 2 ];

	let base: Radix;
	$: base = createRadix(ranks, baseRadix, options);

	function handleChange(event: CustomEvent<MutatedNumber>) {
		ranks = createRadix(event.detail.ranks, event.detail.radix)
			.setRadix(baseRadix, false)
			.ranks;
	}
</script>

<ul class={styles.numbers}>
	{#each radixes as radix}
		<li>
			<div>
				<Number
					{radix}
					ranks={base.setRadix(radix, false).ranks}
					on:ranks-change={handleChange}
				/>
			</div>
		</li>
	{/each}
</ul>