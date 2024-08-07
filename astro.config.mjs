import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ruthlesstodolist.com",
  trailingSlash: "never",
  vite: {
    optimizeDeps: { exclude: ["fsevents"] },
  },
  integrations: [tailwind(), sitemap()],
});
