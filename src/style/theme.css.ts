import { createTheme, createThemeContract } from "@vanilla-extract/css";

import { tokens } from "./token";
import { semanticTokens } from "./semantic-token/index.css";

const lightThemeTokens = {
	tokens,
	semanticTokens: {
		colors: {
			accent: semanticTokens.colors.accent._light,
			bg: semanticTokens.colors.bg._light,
			fg: semanticTokens.colors.fg._light,
			border: semanticTokens.colors.border._light,
		},
	},
};
const darkThemeTokens = {
	tokens,
	semanticTokens: {
		colors: {
			accent: semanticTokens.colors.accent._dark,
			bg: semanticTokens.colors.bg._dark,
			fg: semanticTokens.colors.fg._dark,
			border: semanticTokens.colors.border._dark,
		},
	},
};

// FIXME: 具体に依存しないようにする
const vars = createThemeContract(lightThemeTokens);

/** light mode theme */
const lightThemeClass = createTheme(vars, lightThemeTokens);

/** dark mode theme */
const darkThemeClass = createTheme(vars, darkThemeTokens);

export { vars };
export { lightThemeClass, darkThemeClass };
