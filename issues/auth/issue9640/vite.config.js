import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const ENV_PREFIX = "VOTERO_";
const ENV_DIR = path.resolve(__dirname, "./env");

export default defineConfig({
  plugins: [react()],
  envPrefix: ENV_PREFIX,
  envDir: ENV_DIR,
  resolve: {
    alias: [
      {
        find: "./runtimeConfig",
        replacement: "./runtimeConfig.browser",
      },
    ],
  },
});
