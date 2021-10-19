<script lang="ts">
	import { Numbers, Form, InputNumber, Button, Datalist } from "@components";

	let radixes = [ 10, 2 ];

	function addNumber(event: Event): void {
		const data = new FormData(event.target as HTMLFormElement);
		const radix = Number(data.get("radix"));
		radixes = [ radix, ...radixes ].slice(0, 5);
	}
</script>

<main>
	<section label="controls">
		<Form on:submit={addNumber}>
			<div class="form">
				<InputNumber
					min={2}
					max={36}
					name="radix"
					required
					placeholder="Add another radix based number"
					list="radix-aliases"
				/>
				<Datalist
					id="radix-aliases"
					options={[
						{ label: "binary", value: 2 },
						{ label: "ternary", value: 3 },
						{ label: "octal", value: 8 },
						{ label: "decimal", value: 10 },
						{ label: "hexadecimal", value: 16 },
					]}
				/>
				<Button shape="square" variant="accent" appearance="text">
					+
				</Button>
			</div>
		</Form>
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

	.form {
		display: flex;
		align-items: center;
		padding: var(--space-s);
		gap: var(--space-xs);
	}
</style>