import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import Unocss from "./config/unocss";

const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: false,
    lib: {
      name: "YangguangUI",
      entry: resolve(__dirname, "./src/components/index.ts"),
      fileName: "yangguang-ui",
      formats: ["es", "umd", "iife"],
    },
  },
});
