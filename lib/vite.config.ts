import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "htmx-wrapper-vue",
    },
    rollupOptions: {
      external: ["vue", "htmx.org", "@vueuse"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
