import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	console.log("========================", env.BASE_PATH);
	return {
		base: env.BASE_PATH,
		plugins: [
			react(),
			VitePWA({
				// /public にあるファイルのみキャッシュ可能
				includeAssets: ["favicon.svg"],
				manifest: {
					name: "Drum Machine",
					short_name: "Drum Machine",
					icons: [
						{
							src: "/pwa-192x192.png",
							sizes: "192x192",
							type: "image/png",
							purpose: "any",
						},
						{
							src: "/pwa-512x512.png",
							sizes: "512x512",
							type: "image/png",
							purpose: "any",
						},
						{
							src: "/pwa-maskable-192x192.png",
							sizes: "192x192",
							type: "image/png",
							purpose: "maskable",
						},
						{
							src: "/pwa-maskable-512x512.png",
							sizes: "512x512",
							type: "image/png",
							purpose: "maskable",
						},
					],
					start_url: env.BASE_PATH,
					display: "standalone",
					background_color: "#FFFFFF",
					theme_color: "#FFFFFF",
				},
				workbox: {
					// /public にないファイルをキャッシュ可能
					globPatterns: ["**/*.{js,css,html,woff2}"],
				},
				// FIXME: 開発時に dev-dist にキャッシュを保存する必要がありそう
				devOptions: {
					enabled: true,
				},
			}),
			tsconfigPaths({ root: "./" }),
		],
	};
});
