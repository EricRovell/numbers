<script context="module" lang="ts">
	interface MutatedRank {
		index: number;
		value: number;
	}
</script>

<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Rank from "./Rank.svelte";
	import Radix from "./Radix.svelte";
	import styles from "./style.module.css";

	export let ranks: Array<number> = [ 0 ];
	export let radix = 2;

	const dispatch = createEventDispatcher();

	function handleChange(event: CustomEvent<MutatedRank>) {
		const { value, index } = event.detail;
		dispatch("ranks-change", {
			ranks: ranks.map((rank, i) => i === index ? value : rank),
			radix
		});
	}
</script>

<article class={styles.number}>
	{#each ranks as value, index (`${index}/${value}`)}
		<Rank
			index={index}
			{value}
			{radix}
			on:rank-change={handleChange}
		/>
	{/each}
	<Radix
		{radix}
	/>
</article>