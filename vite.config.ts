import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type ResolvedConfig, type Plugin } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import { parse } from "node-html-parser";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		base: env.BASE_PATH,
		plugins: [
			react(),
			VitePWA({
				base: env.BASE_PATH,
				// /public にあるファイルのみキャッシュ可能
				includeAssets: ["favicon.svg"],
				manifest: {
					name: "Drum Machine",
					short_name: "Drum Machine",
					icons: [
						{
							src: "pwa-192x192.png",
							sizes: "192x192",
							type: "image/png",
							purpose: "any",
						},
						{
							src: "pwa-512x512.png",
							sizes: "512x512",
							type: "image/png",
							purpose: "any",
						},
						{
							src: "pwa-maskable-192x192.png",
							sizes: "192x192",
							type: "image/png",
							purpose: "maskable",
						},
						{
							src: "pwa-maskable-512x512.png",
							sizes: "512x512",
							type: "image/png",
							purpose: "maskable",
						},
					],
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
			resolveAppleTouchStartupImageBasePathPlugin(),
			tsconfigPaths({ root: "./" }),
		],
	};
});

/**
 * vite の UserConfig.base　オプションでは、特定のタグの href や src に対してのみ base path を適用している
 * そのため、<link rel="apple-touch-startup-image" /> に対しても base path を適用するためのプラグインを作成
 */
function resolveAppleTouchStartupImageBasePathPlugin(): Plugin {
	let resolvedConfig: ResolvedConfig;
	return {
		name: "resolve-apple-touch-startup-image-base-path",
		configResolved(config) {
			resolvedConfig = config;
		},
		transformIndexHtml(html) {
			const root = parse(html);
			const targets = root.querySelectorAll(
				'link[rel="apple-touch-startup-image"]',
			);
			for (const target of targets) {
				const href = target.getAttribute("href");
				if (href?.startsWith("/")) {
					target.setAttribute("href", path.join(resolvedConfig.base, href));
				}
			}
			return root.toString();
		},
	};
}
