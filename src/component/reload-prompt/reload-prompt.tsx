import styles from "./reload-prompt.module.css";

import { useRegisterSW } from "virtual:pwa-register/react";

export const ReloadPrompt = () => {
	const {
		offlineReady: [offlineReady, setOfflineReady],
		needRefresh: [needRefresh, setNeedRefresh],
		updateServiceWorker,
	} = useRegisterSW({
		onRegistered(r) {
			console.log(`SW Registered: ${r}`);
		},
		onRegisterError(error) {
			console.log("SW registration error", error);
		},
	});

	const close = () => {
		setOfflineReady(false);
		setNeedRefresh(false);
	};

	return (
		<div className={styles.container}>
			{(offlineReady || needRefresh) && (
				<div className={styles.toast}>
					<div className={styles.toastMessage}>
						{offlineReady ? (
							<span>App ready to work offline</span>
						) : (
							<span>
								New content available, click on reload button to update.
							</span>
						)}
					</div>
					{needRefresh && (
						<button
							type="button"
							className={styles.toastButton}
							onClick={() => updateServiceWorker(true)}
						>
							Reload
						</button>
					)}
					<button
						type="button"
						className={styles.toastButton}
						onClick={() => close()}
					>
						Close
					</button>
				</div>
			)}
		</div>
	);
};
