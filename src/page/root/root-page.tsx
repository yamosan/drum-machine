import { useState } from "react";
import { Select } from "~/component/select";
import { useThemeContext } from "~/context/theme";

export const RootPage = () => {
	const { theme, setTheme } = useThemeContext();
	const handleClick = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	const items = [
		{ value: "1", label: "one" },
		{ value: "2", label: "two" },
		{ value: "3", label: "three" },
		{ value: "4", label: "four", disabled: true },
	];
	const [selected, setSelected] = useState<string>(items[0].value);
	return (
		<main>
			<button type="button" onClick={handleClick}>
				toggle theme
			</button>

			<Select items={items} value={selected} onChange={setSelected} />
		</main>
	);
};
