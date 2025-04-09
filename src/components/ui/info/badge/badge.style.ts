import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";

export const badge = cva({
	base: {
		display: "flex",
		alignItems: "center",
		gap: "1.5",
		rounded: "md",
		px: "1.5",
		py: "0.5",
		h: "fit",
		fontSize: "sm",
		fontWeight: "semibold",
		forcedColorAdjust: "auto",
	},
	variants: {
		variant: {
			solid: {
				bg: "currentColor",
				color: "background",
			},
			soft: {
				bg: "currentColor/10",
				color: "currentColor",
			},
		},
	},
	defaultVariants: {
		variant: "solid",
	},
});

export type BadgeVariants = RecipeVariantProps<typeof badge>;
