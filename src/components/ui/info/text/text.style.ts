import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";

export const text = cva({
	base: {
		fontWeight: "500",
		lineHeight: "1.25",
		letterSpacing: "0",
		textDecoration: "None",
		textTransform: "None",
		color: "fg.muted",
		margin: "0",
	},
	variants: {
		size: {
			lg: { textStyle: "lg" },
			md: { textStyle: "md" },
			sm: { textStyle: "sm" },
			xs: { textStyle: "xs" },
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type TextVariants = RecipeVariantProps<typeof text>;
