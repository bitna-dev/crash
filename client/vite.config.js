import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import { fileURLToPath } from "url";

// ESM 환경에서 __dirname 만들기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@store": path.resolve(__dirname, "src/store"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@": path.resolve(__dirname, "src/*"),
		},
	},
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:3000",
			},
		},
	},
});
