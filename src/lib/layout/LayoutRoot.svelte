<script>
	import { Link } from "@components";
	import {
		version as appVersion,
		homepage as appGithub
	} from "../../../package.json";
	import {
		version as packageVersion,
		homepage as packageGithub
	} from "@ericrovell/radix/package.json";

	import "../styles/normalize.css";
	import "../styles/tokens.css";
	import "../styles/theme-light.css";
	import "../styles/theme-dark.css";
	import "../styles/typography.css";
</script>

<header>
	<span>Numbers</span>
</header>
<div>
	<slot />
</div>
<footer>
	<section>
		<span>Numbers v.{appVersion}</span>
		<span>
			Based on <Link href={packageGithub}>Radix</Link> v{packageVersion}
		</span>
	</section>
	<section>
		<Link href={appGithub}>
			Github
		</Link>
	</section>
</footer>

<style>
	header > span {
		font-size: var(--font-size-7);
	}

	header,
	footer {
		padding: var(--space-m);
		background-color: var(--color-surface-300);
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	footer > section:first-child {
		display: flex;
		flex-direction: column;
	}
</style>