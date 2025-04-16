import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";

export const menuTrigger = cva({
	base: {
		cursor: "pointer",
	},
});

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
		m: 2,
		outline: "none",
		bg: "bg.subtle",
		rounded: "lg",
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
			base: "fg.muted",
			_hover: "fg",
		},
		bg: {
			base: "bg.subtle",
			_hover: "bg.muted",
		},
		_icon: {
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
		color: "fg.muted",
		textTransform: "uppercase",
		letterSpacing: "wider",
	},
});

export const menuRadioItem = cva({
	base: {
		px: "3",
		py: "2",
		cursor: "pointer",
		color: "fg",
		_hover: { bg: "border" },
		_focus: { bg: "border" },
	},
});

export const menuCheckboxItem = cva({
	base: {
		px: "3",
		py: "2",
		cursor: "pointer",
		color: "fg",
		_hover: { bg: "border" },
		_focus: { bg: "border" },
	},
});

export type MenuTriggerVariants = RecipeVariantProps<typeof menuTrigger>;
export type MenuBackdropVariants = RecipeVariantProps<typeof menuBackdrop>;
export type MenuPositionerVariants = RecipeVariantProps<typeof menuPositioner>;
export type MenuPopupVariants = RecipeVariantProps<typeof menuPopup>;
export type MenuArrowVariants = RecipeVariantProps<typeof menuArrow>;
export type MenuItemVariants = RecipeVariantProps<typeof menuItem>;
export type MenuSeparatorVariants = RecipeVariantProps<typeof menuSeparator>;
export type MenuGroupLabelVariants = RecipeVariantProps<typeof menuGroupLabel>;
export type MenuRadioItemVariants = RecipeVariantProps<typeof menuRadioItem>;
export type MenuCheckboxItemVariants = RecipeVariantProps<
	typeof menuCheckboxItem
>;
