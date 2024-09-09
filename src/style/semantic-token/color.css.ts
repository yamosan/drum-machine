import { colors as colorTokens } from "../token/color.css";

type ThemeColorKey = "_light" | "_dark";
type ThemeColor = Record<ThemeColorKey, Record<string | number, string>>;
type ThemeColors = Record<string, ThemeColor>;

export const colors = {
	accent: {
		_light: colorTokens.cyan,
		_dark: colorTokens.cyanDark,
	},
	bg: {
		_light: {
			default: colorTokens.gray[1],
		},
		_dark: {
			default: colorTokens.grayDark[1],
		},
	},
	fg: {
		_light: {
			default: colorTokens.gray[12],
		},
		_dark: {
			default: colorTokens.grayDark[12],
		},
	},
	border: {
		_light: {
			default: colorTokens.gray[7],
			muted: colorTokens.gray[6],
			subtle: colorTokens.gray[4],
			disabled: colorTokens.gray[5],
			outline: colorTokens.grayA[9],
			error: colorTokens.red[9],
		},
		_dark: {
			default: colorTokens.grayDark[7],
			muted: colorTokens.grayDark[6],
			subtle: colorTokens.grayDark[4],
			disabled: colorTokens.grayDark[5],
			outline: colorTokens.grayDarkA[9],
			error: colorTokens.redDark[9],
		},
	},
} satisfies ThemeColors;
