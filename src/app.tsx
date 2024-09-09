import { ReloadPrompt } from "./component/reload-prompt";

import "./app.css";
import "@fontsource-variable/outfit";

import { css } from "styled-system/css";

function App() {
	return (
		<>
			<div>hello world!</div>
			<div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
				Hello 🐼!
			</div>
			<ReloadPrompt />
		</>
	);
}

export default App;
