import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme.css";
const { tokens, semanticTokens } = vars;

globalStyle("html", {
	lineHeight: "1.5",
	fontFamily: tokens.fonts.body,
});

const darkMode = "dark";

globalStyle(`.${darkMode}`, {
	background: semanticTokens.colors.bg._dark.default,
	color: semanticTokens.colors.fg._dark.default,
	colorScheme: "dark",
});

globalStyle("html", {
	background: semanticTokens.colors.bg._light.default,
	color: semanticTokens.colors.fg._light.default,
});
