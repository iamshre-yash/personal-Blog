import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";


// https://astro.build/config
export default defineConfig({
  site: 'https://ishre-yash.github.io/ishreyash',
  base: '/',
  integrations: [mdx(), sitemap(), tailwind({
    config: { applyBaseStyles: false },
  }), prefetch()]
});
