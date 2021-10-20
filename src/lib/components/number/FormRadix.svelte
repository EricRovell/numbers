<script lang="ts">
	import { Form, InputNumber, Button, Datalist } from "@components";
	import { Icon, iconPlus, iconReset } from "@components/svg";

	let input: number | undefined;

	function handleSubmit(event: Event) {
		input = undefined;
	}
</script>

<Form on:submit on:submit={handleSubmit}>
	<div class="form">
		<InputNumber
			bind:value={input}
			min={2}
			max={36}
			name="radix"
			required
			placeholder="Add radix for sync"
			list="radix-aliases"
		/>
		<Datalist
			id="radix-aliases"
			options={[
				{ label: "binary", value: 2 },
				{ label: "ternary", value: 3 },
				{ label: "octal", value: 8 },
				{ label: "decimal", value: 10 },
				{ label: "hexadecimal", value: 16 }
			]}
		/>
		<Button shape="square" appearance="text" title="Reset">
			<Icon path={iconReset} size="1.25em" />
		</Button>
		<Button shape="square" appearance="text" title="Add">
			<Icon path={iconPlus} size="1.25em" />
		</Button>
	</div>
</Form>

<style>
	.form {
		display: flex;
		align-items: center;
		padding: 0 0 0 var(--space-s);
		font-size: var(--font-size-2);
	}
</style>