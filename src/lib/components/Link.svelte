<script lang="ts">
	export let href: string;
	export let targetBlank = false;
	export let nofollow = false;

	$: target = targetBlank ? "_blank" : "";
	$: external = href.indexOf("://") !== -1;

	$: rel = `${external ? "noopener noreferrer" : ""}` + `${nofollow ? "nofollow" : ""}`;
</script>

<a {href} {target} {rel} {...$$restProps}>
	<slot />
</a>

<style>
	a {
		color: var(--color-accent, inherit);
	}
</style>