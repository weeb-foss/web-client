import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";

export const badge = cva({
	base: {
		display: "flex",
		alignItems: "center",
		gap: "1",
		rounded: "md",
		px: "2",
		py: "1",
		h: "fit",
		textStyle: "xs",
		fontWeight: "semibold",
		forcedColorAdjust: "auto",
		_icon: {
			boxSize: "4",
		},
		userSelect: "none",
	},
	variants: {
		variant: {
			solid: {
				bg: "colorPalette.500",
				color: "colorPalette.contrast",
			},
			soft: {
				bg: "colorPalette.500/10",
				color: "colorPalette.500",
			},
		},
	},
	defaultVariants: {
		variant: "solid",
	},
});

export type BadgeVariants = RecipeVariantProps<typeof badge>;
