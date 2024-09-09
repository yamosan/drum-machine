import { ReloadPrompt } from "~/component/reload-prompt";
import { RootPage } from "~/page/root/root-page";
import { ThemeProvider } from "~/provider/theme";

import "~/app.css";
import "@fontsource-variable/outfit";

function App() {
	return (
		<ThemeProvider defaultTheme="light">
			<RootPage />
			<ReloadPrompt />
		</ThemeProvider>
	);
}

export default App;
