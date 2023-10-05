import type { NuxtConfig } from "@nuxt/types";
// import Vue from "@vitejs/plugin-vue";

const config: NuxtConfig = {
  buildModules: ["@nuxt/typescript-build"],
  // vite: {
  //   plugins: [Vue()],
  // },
  css: [
    // Import global CSS file
    "@/assets/css/app.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};

export default config;
