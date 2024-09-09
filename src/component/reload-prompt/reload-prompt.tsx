import { createToaster, Toaster } from "../toast/toast";

import { useRegisterSW } from "virtual:pwa-register/react";

const toaster = createToaster();

export const ReloadPrompt = () => {
	const { updateServiceWorker } = useRegisterSW({
		onRegistered(r) {
			console.log(`SW Registered: ${r}`);
		},
		onRegisterError(error) {
			console.log("SW registration error", error);
		},
		onNeedRefresh: () => {
			toaster.create({
				id: "new-content",
				title: "New content available",
				description: "Click on reload button to update",
				type: "info",
			});
		},
		onOfflineReady: () => {
			toaster.create({
				id: "offline-ready",
				title: "App ready to work offline",
				description: "This app is ready to work offline",
				type: "success",
			});
		},
	});

	return (
		<Toaster
			toaster={toaster}
			action={{
				label: "Reload",
				callback: () => updateServiceWorker(true),
			}}
		/>
	);
};
