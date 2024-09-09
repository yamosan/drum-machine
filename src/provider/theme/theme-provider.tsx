import { type FC, type ReactNode, useLayoutEffect, useState } from "react";
import { ThemeContext, type ThemeContextType } from "~/context/theme";

type Props = {
	children: ReactNode;
	defaultTheme?: ThemeContextType["theme"];
};

export const ThemeProvider: FC<Props> = ({
	children,
	defaultTheme = "light",
}) => {
	const [theme, setTheme] = useState<ThemeContextType["theme"]>(defaultTheme);

	useLayoutEffect(() => {
		if (theme === "light") {
			document.body.classList.remove("dark");
			document.body.classList.add("light");
		} else {
			document.body.classList.remove("light");
			document.body.classList.add("dark");
		}
		return () => {
			document.body.classList.remove("light", "dark");
		};
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
