import { globalStyle } from "@vanilla-extract/css";

import { darkThemeClass, vars } from "./theme.css";
const { tokens, semanticTokens } = vars;

globalStyle("html", {
	lineHeight: "1.5",
	fontFamily: tokens.fonts.body,
	background: semanticTokens.colors.bg.default,
	color: semanticTokens.colors.fg.default,
});

globalStyle(darkThemeClass, {
	colorScheme: "dark",
});
