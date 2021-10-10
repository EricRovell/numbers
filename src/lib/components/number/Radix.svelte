<script lang="ts">
	export let radix: number;
</script>

<div>
	<span>{radix}</span>
</div>

<style>
	div {
		position: sticky;
		right: 0;

		display: flex;
		place-items: center;
		padding: var(--space-m);
		background-color: var(--color-surface-300);
		border: var(--border-1);
		border-radius: 5px;

		font-size: var(--font-size-5);
		color: var(--color-gray-800);		
	}
</style>