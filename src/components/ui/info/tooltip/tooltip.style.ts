import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";

export const tooltipPositioner = cva({
	base: {
		position: "absolute",
		zIndex: "tooltip",
	},
});

export const tooltipPopup = cva({
	base: {
		bg: "bg.subtle",
		color: "fg.muted",
		px: "3",
		py: "1",
		rounded: "lg",
		fontSize: "sm",
		m: 2.5,
		translate: "auto",
		border: "1px solid {colors.border}",
		animationDuration: "faster",
		_open: {
			animationStyle: "scale-fade-in",
		},
		_closed: {
			animationStyle: "scale-fade-out",
		},
	},
});

export const tooltipArrow = cva({
	base: {
		zIndex: "tooltip",
		"&[data-side^=right]": {
			left: "-8.5px",
			rotate: "270deg",
		},
		"&[data-side^=left]": {
			right: "-8.5px",
			rotate: "90deg",
		},
		"&[data-side^=top]": {
			bottom: "-8.5px",
			rotate: "180deg",
		},
		"&[data-side^=bottom]": {
			top: "-9px",
			rotate: "0deg",
		},
	},
});

export type TooltipVariants = RecipeVariantProps<typeof tooltipPopup>;
