import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig({
  plugins,
  // ↓↓↓↓↓↓ ここから修正 ↓↓↓↓↓↓

  // [修正点1] ビルド後のパスを相対パスにする設定を追加
  base: "./",

  // [修正点2] ビルドの出力先を 'dist/public' から 'docs' に変更
  build: {
    // 'root'オプションが'client'に設定されているため、
    // プロジェクトのルートから見た 'docs' フォルダに出力するよう絶対パスで指定します。
    outDir: path.resolve(import.meta.dirname, "docs"),
    emptyOutDir: true,
  },

  // ↑↑↑↑↑↑ ここまで修正 ↑↑↑↑↑↑

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  // build: { ... } は上に移動しました
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
