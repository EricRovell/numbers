<script>
	import { Link, Navigation } from "@components";
	import { Icon, iconGithub, svgLogo } from "@components/svg";
	import { version as appVersion, homepage as appGithub	} from "../../../package.json";
	import { version as packageVersion, homepage as packageGithub } from "@ericrovell/radix/package.json";
	import { pathPlayground, pathChallenge, pathManual, pathAbout } from "@core/paths";
	import styles from "./layout-root.module.css";

	import "../styles/normalize.css";
	import "../styles/tokens.css";
	import "../styles/theme-light.css";
	import "../styles/theme-dark.css";
	import "../styles/typography.css";
</script>

<header class={styles.header}>
	<section label="logo">
		<a href="/" class={styles.logo}>
			<Icon svg={svgLogo} />
			<span>Numbers</span>
		</a>
	</section>
	<section label="navigation">
		<Navigation.Container>
			<Navigation.Item href={pathPlayground}>
				Playground
			</Navigation.Item>
			<Navigation.Item href={pathChallenge} pattern={/test/} disabled>
				Challenge
			</Navigation.Item>
			<Navigation.Item href={pathManual} pattern={/\/docs/} disabled>
				Manual
			</Navigation.Item>
			<Navigation.Item href={pathAbout} pattern={/\/about/} disabled>
				About
			</Navigation.Item>
		</Navigation.Container>
	</section>
</header>
<div>
	<slot />
</div>
<footer class={styles.footer}>
	<section>
		<span>Numbers v{appVersion}</span>
		<span>
			Based on <Link href={packageGithub}>Radix</Link> v{packageVersion}
		</span>
	</section>
	<section>
		<Link href={appGithub}>
			<Icon path={iconGithub} size="1.5em" />
		</Link>
	</section>
</footer>