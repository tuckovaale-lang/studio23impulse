import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Replit плагины подключаем корректно через деструктуризацию
import * as cartographerModule from "@replit/vite-plugin-cartographer";
import * as devBannerModule from "@replit/vite-plugin-dev-banner";

const plugins = [react(), runtimeErrorOverlay(), tailwindcss()];

// Replit плагины только в dev
if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
  plugins.push(cartographerModule.cartographer());
  plugins.push(devBannerModule.devBanner());
}

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve("./client/src"),
      "@shared": path.resolve("./shared"),
      "@assets": path.resolve("./attached_assets"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve("./client"),
  build: {
    outDir: path.resolve("./dist"),
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 5173,
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    proxy: {
      "/api": `http://localhost:${process.env.PORT || 5001}`,
    },
  },
});