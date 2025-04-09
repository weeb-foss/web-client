import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";

export const menuBackdrop = cva({
	base: {
		pos: "fixed",
		inset: 0,
		bg: "black/70",
		zIndex: "docked",
	},
});

export const menuPositioner = cva({
	base: {
		pos: "absolute",
		zIndex: "dropdown",
		outline: "none",
	},
});

export const menuPopup = cva({
	base: {
		alignSelf: "start",
		mt: 2,
		outline: "none",
		bg: "background.subtle",
		rounded: "lg",
		boxShadow: "lg",
		py: "2",
		minW: "48",
		maxW: "sm",
		border: "1px solid {colors.border}",
		translate: "auto",
		animationDuration: "0.1s",
		_open: {
			animationStyle: "scale-fade-in",
		},
		_closed: {
			animationStyle: "scale-fade-out",
		},
		"&[data-side=top]": {
			translate: "0 -5px",
		},
		"&[data-side=bottom]": {
			translate: "0 5px",
		},
		"&[data-side=left]": {
			translate: "-5px 0",
		},
		"&[data-side=right]": {
			translate: "5px 0",
		},
	},
});

export const menuArrow = cva({
	base: {
		zIndex: "dropdown",
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

export const menuItem = cva({
	base: {
		display: "flex",
		alignItems: "center",
		gap: 2,
		outline: "none",
		px: 3,
		py: 1,
		cursor: "pointer",
		color: {
			base: "text.subtle",
			_hover: "text",
		},
		bg: {
			base: "background.subtle",
			_hover: "background.content",
		},
		"& svg": {
			w: 5,
			h: 5,
		},
	},
});

export const menuSeparator = cva({
	base: {
		h: "1px",
		bg: "border",
		my: "2",
	},
});

export const menuGroupLabel = cva({
	base: {
		px: "3",
		py: "1",
		fontSize: "xs",
		fontWeight: "bold",
		color: "text.muted",
		textTransform: "uppercase",
		letterSpacing: "wider",
	},
});

export const menuRadioItem = cva({
	base: {
		px: "3",
		py: "2",
		cursor: "pointer",
		color: "text",
		_hover: { bg: "border" },
		_focus: { bg: "border" },
	},
});

export const menuCheckboxItem = cva({
	base: {
		px: "3",
		py: "2",
		cursor: "pointer",
		color: "text",
		_hover: { bg: "border" },
		_focus: { bg: "border" },
	},
});

export type MenuItemVariants = RecipeVariantProps<typeof menuItem>;
export type MenuRadioItemVariants = RecipeVariantProps<typeof menuRadioItem>;
export type MenuCheckboxItemVariants = RecipeVariantProps<
	typeof menuCheckboxItem
>;
