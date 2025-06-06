import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginCopy } from "vite-plugin-copy2";

export default defineConfig({
  plugins: [
    react(),
    VitePluginCopy({
      targets: [
        {
          src: "public/_redirects",
          dest: "dist",
        },
      ],
    }),
  ],

  test: {
    environment: "jsdom",
    globals: true,
  },
});
