import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA(),
		tsconfigPaths({ root: "./" }),
		vanillaExtractPlugin(),
	],
});
