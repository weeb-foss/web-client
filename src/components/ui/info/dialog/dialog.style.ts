import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";

export const dialogBackdrop = cva({
	base: {
		position: "fixed",
		inset: "0",
		bg: "black",
		opacity: "0.7",
		transition: "all 150ms",
		"&[data-ending-style], &[data-starting-style]": {
			opacity: "0",
		},
	},
});

export const dialogPopup = cva({
	base: {
		position: "fixed",
		top: "50%",
		left: "50%",
		mt: "-8",
		w: "full",
		maxW: "lg",
		transform: "translate(-50%, -50%)",
		rounded: "xl",
		bg: "background.subtle",
		p: "6",
		color: "text",
		border: "1px solid {colors.border}",
		animationDuration: "0.1s",
		display: "flex",
		flexDir: "column",
		"--transform-origin": "top",
		_open: {
			animationStyle: "scale-fade-in",
		},
		_closed: {
			animationStyle: "scale-fade-out",
		},
	},
});

export const dialogDescription = cva({
	base: {
		mb: 6,
		mt: 2,
		fontSize: "base",
		color: "text.subtle",
	},
});

export type DialogBackdropVariants = RecipeVariantProps<typeof dialogBackdrop>;
export type DialogPopupVariants = RecipeVariantProps<typeof dialogPopup>;
export type DialogDescriptionVariants = RecipeVariantProps<
	typeof dialogDescription
>;
