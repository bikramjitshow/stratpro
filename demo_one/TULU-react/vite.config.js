import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        silenceDeprecations: ["import"],
      },
    },
  },
  watch: {
    ignored: [
      "**",
      "!**/app/assets/**",
      "!**/vendor/assets/**",
      "!config/**/*.js",
      "!config/**.js",
    ],
  },
});
