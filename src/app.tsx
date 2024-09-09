import { RootPage } from "~/page/root/root-page";
import { ThemeProvider } from "~/provider/theme";

import "~/app.css";
import "@fontsource-variable/outfit";
import { ReloadPrompt } from "./component/reload-prompt";

function App() {
	return (
		<ThemeProvider defaultTheme="dark">
			<RootPage />
			<ReloadPrompt />
		</ThemeProvider>
	);
}

export default App;
