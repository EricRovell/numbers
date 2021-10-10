<script lang="ts">
	export let href: string;
	export let targetBlank = false;
	export let nofollow = false;

	$: external = href.indexOf("://") !== -1;
	$: target = (targetBlank || external) ? "_blank" : "";

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