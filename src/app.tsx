import { useLayoutEffect } from "react";
import { ReloadPrompt } from "./component/reload-prompt";

import "@fontsource-variable/outfit";

import "~/style/global.css";
import { themeClass } from "~/style/theme.css";

function App() {
	useLayoutEffect(() => {
		document.documentElement.classList.add(themeClass);
		return () => {
			document.documentElement.classList.remove(themeClass);
		};
	}, []);

	return (
		<>
			<div>hello world!</div>

			<ReloadPrompt />
		</>
	);
}

export default App;
