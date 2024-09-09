import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { Portal, Select as ArkSelect } from "@ark-ui/react";
import type { FC } from "react";
import { recipe } from "./select.css";

type ArkSelectProps = ArkSelect.RootProps<Item>;

export type Item = {
	label: string;
	value: string;
	disabled?: boolean;
};

type Props = {
	label?: string;
	items: Item[];
	value: Item["value"];
	onChange: (value: Item["value"]) => void;
};
export const Select: FC<Props> = ({ label, items, value, onChange }) => {
	const handleValueChange: ArkSelectProps["onValueChange"] = ({ value }) => {
		if (value.length !== 1) {
			throw new Error("Unexpected value length");
		}
		onChange(value[0]);
	};

	const styles = recipe({});

	return (
		<ArkSelect.Root
			items={items}
			value={[value]}
			onValueChange={handleValueChange}
			positioning={{ sameWidth: true }}
			className={styles.root}
		>
			<ArkSelect.Label className={styles.label}>{label}</ArkSelect.Label>
			<ArkSelect.Control className={styles.control}>
				<ArkSelect.Trigger className={styles.trigger}>
					<ArkSelect.ValueText className={styles.valueText} />
					<ArkSelect.Indicator className={styles.indicator}>
						<ChevronDownIcon />
					</ArkSelect.Indicator>
				</ArkSelect.Trigger>
			</ArkSelect.Control>
			<Portal>
				<ArkSelect.Positioner className={styles.positioner}>
					<ArkSelect.Content className={styles.content}>
						<ArkSelect.ItemGroup className={styles.itemGroup}>
							{/* <ArkSelect.ItemGroupLabel>{label}</ArkSelect.ItemGroupLabel> */}
							{items.map((item) => (
								<ArkSelect.Item
									key={item.value}
									item={item}
									className={styles.item}
								>
									<ArkSelect.ItemText className={styles.itemText}>
										{item.label}
									</ArkSelect.ItemText>
									<ArkSelect.ItemIndicator className={styles.itemIndicator}>
										<CheckIcon />
									</ArkSelect.ItemIndicator>
								</ArkSelect.Item>
							))}
						</ArkSelect.ItemGroup>
					</ArkSelect.Content>
				</ArkSelect.Positioner>
			</Portal>
			<ArkSelect.HiddenSelect />
		</ArkSelect.Root>
	);
};
