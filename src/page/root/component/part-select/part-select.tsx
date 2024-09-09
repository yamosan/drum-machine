import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { Select } from "~/component/atom/select";
import { Portal } from "@ark-ui/react";
import type { FC } from "react";

type SelectProps = Select.RootProps;

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
export const PartSelect: FC<Props> = ({ label, items, value, onChange }) => {
	const handleValueChange: SelectProps["onValueChange"] = ({ value }) => {
		if (value.length !== 1) {
			throw new Error("Unexpected value length");
		}
		onChange(value[0]);
	};

	return (
		<Select.Root
			items={items}
			value={[value]}
			onValueChange={handleValueChange}
			positioning={{ sameWidth: true }}
		>
			<Select.Label>{label}</Select.Label>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText />
					<Select.Indicator>
						<ChevronDownIcon />
					</Select.Indicator>
				</Select.Trigger>
			</Select.Control>
			<Portal>
				<Select.Positioner>
					<Select.Content>
						<Select.ItemGroup>
							{items.map((item) => (
								<Select.Item key={item.value} item={item}>
									<Select.ItemText>{item.label}</Select.ItemText>
									<Select.ItemIndicator>
										<CheckIcon />
									</Select.ItemIndicator>
								</Select.Item>
							))}
						</Select.ItemGroup>
					</Select.Content>
				</Select.Positioner>
			</Portal>
			<Select.HiddenSelect />
		</Select.Root>
	);
};
