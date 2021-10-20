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
	<section>
		<Numbers
			ranks={[ 0, 0, 0, 0 ]}
			{radixes}
			options={{ minRanks: 5 }}
		/>
	</section>
</main>

<style>
	main {
		display: grid;
		gap: var(--space-xl);
		align-content: start;
		justify-items: center;

		min-height: calc(100vh - 50px);
		margin: var(--space-xl) 0;
	}

	section[label="controls"] {
		width: min(75%, 375px);
	}
</style>