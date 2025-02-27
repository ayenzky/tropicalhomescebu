// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "1nd8mw6f",
      dataset: "production",
      useCdn: false, // See note on using the CDN
      apiVersion: "2025-01-28", // insert the current date to access the latest version of the API
      studioBasePath: '/studio' // If you want to access the Studio on a route
    }), 
    react(),
    tailwind()
  ],
  adapter: netlify()
});