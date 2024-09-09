import { createContext, useContext } from "react";

export type ThemeContextType = {
	theme: "light" | "dark";
	setTheme: (theme: "light" | "dark") => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
	const context = useContext(ThemeContext);
	if (context === null) {
		throw new Error("useThemeContext must be used within a ThemeProvider");
	}
	return context;
};
