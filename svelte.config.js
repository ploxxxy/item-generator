import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: '/item-generator'
    },
    adapter: adapter({
        fallback: 'index.html',
        precompress: false,
        pages: 'docs',
        assets: 'docs'
    })
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
