import { XIcon } from "lucide-react";

import {
	Toast as ArkToast,
	Toaster as ArkToaster,
	createToaster as createArkToaster,
} from "@ark-ui/react";
import { recipe } from "./toast.style";
import { Button } from "../button";
import type { ComponentProps, FC } from "react";

export const createToaster = () => {
	return createArkToaster({
		placement: "bottom-end",
		overlap: true,
		gap: 24,
	});
};

type ToasterProps = {
	toaster: ComponentProps<typeof ArkToaster>["toaster"];
} & ToastProps;
export const Toaster: FC<ToasterProps> = ({ toaster, ...props }) => {
	return (
		<ArkToaster toaster={toaster}>
			{(toast) => (
				<Toast
					key={toast.id}
					title={(toast.title as string) || props.title}
					description={(toast.description as string) || props.description}
					action={props.action}
				/>
			)}
		</ArkToaster>
	);
};

type ToastProps = {
	title?: string;
	description?: string;
	action?: {
		label: string;
		callback: () => void;
	};
};
const Toast: FC<ToastProps> = ({ title, description, action }) => {
	const styles = recipe();
	return (
		<ArkToast.Root className={styles.root}>
			<ArkToast.Title className={styles.title}>{title}</ArkToast.Title>
			<ArkToast.Description className={styles.description}>
				{description}
			</ArkToast.Description>
			{action && (
				<ArkToast.ActionTrigger className={styles.actionTrigger}>
					<Button variant="link" size="sm" onClick={action.callback}>
						{action.label}
					</Button>
				</ArkToast.ActionTrigger>
			)}
			<ArkToast.CloseTrigger asChild className={styles.closeTrigger}>
				<Button size="sm" variant="link">
					<XIcon size={16} />
				</Button>
			</ArkToast.CloseTrigger>
		</ArkToast.Root>
	);
};
