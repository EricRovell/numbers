<form on:submit|preventDefault>
	<slot />
</form>

<style>
	form {
		--outline-color: unset;

		border: var(--border-1);
		outline: 1px solid var(--outline-color);
		transition: outline-color 0.5s linear;
		border-radius: var(--radius-medium);
	}

	form:focus-within {
		--outline-color: var(--color-accent);
	}
</style>