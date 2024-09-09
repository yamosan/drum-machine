import { XIcon } from "lucide-react";

import { Toast as ArkToast, Toaster, createToaster } from "@ark-ui/react";
import { recipe } from "./toast.style";
import { Button } from "../button";

const toaster = createToaster({
	placement: "bottom-end",
	overlap: true,
	gap: 24,
});

type CreateToasterOption = {
	title: string;
	description: string;
	type: "info" | "success" | "warning" | "error" | "loading";
};
export const createToast = (option: CreateToasterOption) => {
	toaster.create(option);
};

export const ToastContainer = () => {
	const styles = recipe();
	return (
		<Toaster toaster={toaster}>
			{(toast) => (
				<ArkToast.Root key={toast.id} className={styles.root}>
					<ArkToast.Title className={styles.title}>
						{toast.title}
					</ArkToast.Title>
					<ArkToast.Description className={styles.description}>
						{toast.description}
					</ArkToast.Description>
					<ArkToast.CloseTrigger asChild className={styles.closeTrigger}>
						<Button size="sm" variant="link">
							<XIcon size={16} />
						</Button>
					</ArkToast.CloseTrigger>
				</ArkToast.Root>
			)}
		</Toaster>
	);
};
