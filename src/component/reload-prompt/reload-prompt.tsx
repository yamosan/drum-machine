import { createToaster, Toaster } from "../toast/toast";

import { useRegisterSW } from "virtual:pwa-register/react";

const needRefreshToaster = createToaster();
const offlineReadyToaster = createToaster();

export const ReloadPrompt = () => {
	const { updateServiceWorker } = useRegisterSW({
		onRegistered(r) {
			console.log(`SW Registered: ${r}`);
		},
		onRegisterError(error) {
			console.log("SW registration error", error);
		},
		onNeedRefresh: () => {
			needRefreshToaster.create({
				id: "new-content",
				title: "New content available",
				description: "Click on reload button to update",
				type: "loading",
			});
		},
		onOfflineReady: () => {
			offlineReadyToaster.create({
				id: "offline-ready",
				title: "App ready to work offline",
				description: "This app is ready to work offline",
				type: "info",
			});
		},
	});

	return (
		<>
			<Toaster
				toaster={needRefreshToaster}
				action={{
					label: "Reload",
					callback: () => updateServiceWorker(true),
				}}
			/>
			<Toaster toaster={offlineReadyToaster} />
		</>
	);
};
