import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        oferta: resolve(__dirname, "oferta.html"),
        privacy: resolve(__dirname, "privacy-policy.html"),
      },
    },
  },
});
