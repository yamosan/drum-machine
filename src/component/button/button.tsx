import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { recipe, type Variant } from "./button.style";

type Props = ComponentPropsWithoutRef<"button"> & Variant;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
	const [variantProps, otherProps] = recipe.splitVariantProps(props);

	const style = recipe(variantProps);
	return <button ref={ref} className={style} {...otherProps} />;
});
