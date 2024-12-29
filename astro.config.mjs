import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
	site: "https://talonpoika.me",
	integrations: [mdx(), svelte()],
	vite: {
		manifest: {
			name: "Ville Talonpoika",
			short_name: "Ville Talonpoika",
			description: "Web & game developer, working as a consultant.",
			theme_color: "#FF6A34",
			display: "standalone",
			icons: [
				{
					src: "pwa-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "pwa-512x512.png",
					sizes: "256x256",
					type: "image/png",
				},
			],
		},
	},
	markdown: {
		shikiConfig: {
			theme: "kanagawa-dragon",
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
