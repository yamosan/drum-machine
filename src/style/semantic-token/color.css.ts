import { colors as colorTokens } from "../token/color.css";

export const colors = {
	// 必要に応じて以下の形にする
	// accent: {
	// 	_light: {
	//         ...colorTokens.cyan,
	//         a1: colorTokens.cyanA[1],
	//         a2: colorTokens.cyanA[2],
	//         ~~~
	//     },
	// },
	accent: {
		_light: colorTokens.cyan,
		_dark: colorTokens.cyanDark,
	},
	bg: {
		_light: {
			default: colorTokens.gray[1],
		},
		_dark: {
			default: colorTokens.gray[12],
		},
	},
	fg: {
		_light: {
			default: colorTokens.gray[12],
		},
		_dark: {
			default: colorTokens.gray[1],
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
			default: colorTokens.gray[7],
			muted: colorTokens.gray[6],
			subtle: colorTokens.gray[4],
			disabled: colorTokens.gray[5],
			outline: colorTokens.grayA[9],
			error: colorTokens.red[9],
		},
	},
} as const;
