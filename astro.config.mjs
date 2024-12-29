import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import rehypeExternalLinks from "rehype-external-links";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
	site: "https://talonpoika.me",
	integrations: [AstroPWA(), mdx(), svelte()],
	markdown: {
		shikiConfig: {
			theme: "rose-pine",
		},
		remarkPlugins: [
			remarkGfm,
			[
				remarkSmartypants,
				{
					quotes: false,
				},
			],
		],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: "_blank",
				},
			],
		],
	},
});
