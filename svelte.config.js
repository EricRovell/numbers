import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import path from "path";

const aliases = [
	{ name: "@components", path: "./src/lib/components" },
	{ name: "@core", path: "./src/core" },
	{ name: "@lib", path: "./src/lib" },
	{ name: "@styles", path: "./src/lib/styles" },
	{ name: "@stores", path: "./src/lib/stores" }
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess(),
	],
	kit: {
		adapter: adapter(),
		target: "body",
		vite: {
			resolve: {
				alias: Object.fromEntries(aliases.map(alias => (
					[ alias.name, path.resolve(alias.path) ]
				)))
			}
		}
	}
};

export default config;