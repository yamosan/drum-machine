import { ReloadPrompt } from "~/component/reload-prompt";
import { RootPage } from "~/page/root/root-page";
import { ThemeProvider } from "~/provider/theme";

import "~/app.css";
import "@fontsource-variable/outfit";
import { ToastContainer } from "./component/toast";

function App() {
	return (
		<ThemeProvider defaultTheme="dark">
			<RootPage />
			<ReloadPrompt />
			<ToastContainer />
		</ThemeProvider>
	);
}

export default App;
