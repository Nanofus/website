import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import autoprefixer from 'autoprefixer';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess.js';

/** @type {import("@sveltejs/kit").Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information uses preprocessors
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [autoprefixer]
      }
    }),
    mdsvex(mdsvexConfig)
  ],

  kit: {
    adapter: adapter()
  }
};

export default config;
