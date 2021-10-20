<script lang="ts">
	import { Numbers, FormRadix } from "@components";

	let radixes = [ 10, 2 ];

	function addNumber(event: Event): void {
		const data = new FormData(event.target as HTMLFormElement);
		const radix = Number(data.get("radix"));
		radixes = [ radix, ...radixes ].slice(0, 5);
	}
</script>

<main>
	<section label="controls">
		<FormRadix on:submit={addNumber} />
	</section>
	<section label="number">
		<Numbers
			ranks={[ 0, 0, 0, 0 ]}
			{radixes}
			options={{ minRanks: 5 }}
		/>
	</section>
</main>

<style>
	main {
		--max-width: 940px;
		--max-width-half: calc(var(--max-width) / 2);

		display: grid;
		grid-template: min-content auto / 1fr repeat(2, minmax(max-content, var(--max-width-half))) 1fr;
		gap: var(--space-m);
		align-content: start;
		min-height: calc(100vh - 50px);
		margin: var(--space-xl) 0;
	}

	section[label="controls"] {
		justify-self: center;
		grid-row: 1;
		grid-column: 2 / span 2;
		width: min(100%, 375px);
	}

	section[label="number"] {
		grid-row: 2;
		grid-column: 1 / span 3;
		justify-self: end;
	}
</style>