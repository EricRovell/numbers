<script lang="ts">
	import Numbers from "./Numbers.svelte";
	import FormRadix from "./FormRadix.svelte";

	export let radixes = [ 10, 2 ];

	// options
	export let radixControls = false;
	export let maxRadixes = 5;

	function addNumber(event: Event): void {
		const data = new FormData(event.target as HTMLFormElement);
		const radix = Number(data.get("radix"));
		radixes = [ radix, ...radixes ].slice(0, maxRadixes);
	}
</script>

<article>
	{#if radixControls}
		<section label="controls">
			<FormRadix on:submit={addNumber} />
		</section>
	{/if}
	<section label="number">
		<Numbers
			ranks={[ 0, 0, 0, 1 ]}
			{radixes}
			options={{ minRanks: 5 }}
		/>
	</section>
</article>

<style>
	article {
		--max-width: 940px;
		--max-width-half: calc(var(--max-width) / 2);
		display: grid;
		grid-template: min-content auto / 1fr repeat(2, minmax(max-content, var(--max-width-half))) 1fr;
		align-content: start;
		min-height: calc(100vh - 50px);
		margin: var(--space-xl) 0;
	}

	section[label="controls"] {
		justify-self: center;
		grid-row: 1;
		grid-column: 2 / span 2;
		width: min(100%, 500px);
		margin-bottom: var(--space-m);
		padding: 0 var(--space-s);
	}

	section[label="number"] {
		grid-row: 2;
		grid-column: 1 / span 3;
		justify-self: end;
		max-width: 100%;
		padding: var(--space-s);
	}
</style>