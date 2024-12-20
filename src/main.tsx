import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

// クライアントサイドで動的に splash screen を生成する
import "pwacompat";

const root = document.getElementById("root");
if (!root) {
	throw new Error("Root element not found");
}
createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
