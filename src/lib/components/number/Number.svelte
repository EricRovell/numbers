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
	import IncrementRank from "./IncrementRank.svelte";
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

	function addRank() {
		// TODO: move `-32` value into `Number` parameters
		// id depicts the limit for the number of ranks
		ranks = [ 0, ...ranks ].slice(-32);
	}
</script>

<li class={styles.number}>
	<section label="ranks" class={styles.ranks}>
		<IncrementRank on:click={addRank} />
		<ol>
			{#each ranks as value, index (`${index}/${value}`)}
				<Rank
					{index}
					{value}
					{radix}
					on:rank-change={handleChange}
				/>
			{/each}
		</ol>
	</section>
	<section label="radix">
		<Radix
			{radix}
		/>
	</section>
</li>