import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import("@sveltejs/kit").Config} */
const config = {
  extensions: ['.svelte'],
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [autoprefixer]
      }
    })
  ],
  kit: {
    adapter: adapter()
  }
};

export default config;
