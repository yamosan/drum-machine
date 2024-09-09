import { useState } from "react";
import { Button } from "~/component/button";
import { Select } from "~/component/select";
import { createToast } from "~/component/toast";
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
			<Button size="md" variant="outline" type="button" onClick={handleClick}>
				toggle theme
			</Button>
			<Button
				size="md"
				variant="outline"
				type="button"
				onClick={() => {
					createToast({
						title: "Hello",
						description: "Hello, world!",
						type: "loading",
					});
				}}
			>
				create toast
			</Button>

			<Select items={items} value={selected} onChange={setSelected} />
		</main>
	);
};
