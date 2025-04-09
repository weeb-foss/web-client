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
				fontSize: "6xl",
				fontWeight: "800",
			},
			"5xl": {
				fontSize: "5xl",
				fontWeight: "800",
			},
			"4xl": {
				fontSize: "4xl",
				fontWeight: "800",
			},
			"3xl": {
				fontSize: "3xl",
				fontWeight: "800",
			},
			"2xl": {
				fontSize: "2xl",
				fontWeight: "700",
			},
			xl: {
				fontSize: "xl",
				fontWeight: "700",
			},
			lg: {
				fontSize: "lg",
				fontWeight: "600",
			},
		},
	},
	defaultVariants: {
		size: "2xl",
	},
});

export type HeadingVariants = RecipeVariantProps<typeof heading>;
