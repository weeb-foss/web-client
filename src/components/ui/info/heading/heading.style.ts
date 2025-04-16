import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";

export const heading = cva({
	base: {
		lineHeight: "1",
		letterSpacing: "0",
		textDecoration: "None",
		textTransform: "None",
		margin: "0",
	},
	variants: {
		size: {
			"6xl": {
				textStyle: "6xl",
				fontWeight: "800",
			},
			"5xl": {
				textStyle: "5xl",
				fontWeight: "800",
			},
			"4xl": {
				textStyle: "4xl",
				fontWeight: "800",
			},
			"3xl": {
				textStyle: "3xl",
				fontWeight: "800",
			},
			"2xl": {
				textStyle: "2xl",
				fontWeight: "700",
			},
			xl: {
				textStyle: "xl",
				fontWeight: "700",
			},
			lg: {
				textStyle: "lg",
				fontWeight: "600",
			},
		},
	},
	defaultVariants: {
		size: "2xl",
	},
});

export type HeadingVariants = RecipeVariantProps<typeof heading>;
