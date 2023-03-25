import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],
  smartypants: {
    quotes: true,
    ellipses: true,
    dashes: 'oldschool',
  },
  remarkPlugins: [],
  rehypePlugins: [
    rehypeSlug,
    rehypeAutolinkHeadings,
  ],
});

export default config;
