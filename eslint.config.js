import eslintPluginAstro, * as eslintPluginSvelte from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
	...eslintPluginAstro.configs.recommended,
	...eslintPluginSvelte.configs["flat/recommended"],
	eslintConfigPrettier,
];
