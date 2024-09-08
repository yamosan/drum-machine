import { createTheme } from "@vanilla-extract/css";

import { tokens } from "./token";
import { semanticTokens } from "./semantic-token/index.css";

export const [themeClass, vars] = createTheme({
	tokens,
	semanticTokens,
});
