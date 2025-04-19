import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";
import { heading } from "../heading/heading.style";

export const dialogBackdrop = cva({
	base: {
		bg: "blackAlpha.800",
		pos: "fixed",
		left: 0,
		top: 0,
		w: "100vw",
		h: "100dvh",
		_open: {
			animationName: "fade-in",
			animationDuration: "slow",
		},
		_closed: {
			animationName: "fade-out",
			animationDuration: "moderate",
		},
	},
});

export const dialogPositioner = cva({
	base: {
		display: "flex",
		alignItems: "center",
		width: "100vw",
		height: "100dvh",
		position: "fixed",
		left: 0,
		top: 0,
		zIndex: "modal",
		justifyContent: "center",
		overscrollBehaviorY: "none",
	},
});

export const dialogPopup = cva({
	base: {
		maxW: "xl",
		display: "flex",
		flexDirection: "column",
		position: "relative",
		width: "100%",
		outline: 0,
		borderRadius: "2xl",
		textStyle: "sm",
		zIndex: "modal",
		bg: "bg.panel",
		boxShadow: "lg",
		_open: {
			animationDuration: "faster",
			animationName: "scale-in, fade-in",
		},
		_closed: {
			animationDuration: "faster",
			animationName: "scale-out, fade-out",
		},
	},
	variants: {
		size: {
			sm: { maxW: "sm" },
			md: { maxW: "md" },
			lg: { maxW: "lg" },
			xl: { maxW: "xl" },
			full: { maxW: "100vw", w: "100vw", h: "100dvh", borderRadius: "none" },
		},
	},
	defaultVariants: {
		size: "xl",
	},
});

export const dialogBody = cva({
	base: {
		flex: "1",
		px: "6",
		pt: "2",
		pb: "6",
		overflow: "auto",
		maxH: "xs",
	},
	variants: {
		padding: {
			none: { px: "0", py: "0" },
			sm: { px: "4", py: "2" },
			md: { px: "6", py: "4" },
			lg: { px: "8", py: "6" },
		},
	},
	defaultVariants: {
		padding: "md",
	},
});

export const dialogTitle = cva({
	base: {
		display: "flex",
		gap: "2",
		flex: 0,
		px: "6",
		pt: "6",
		pb: "4",
		...heading.raw(),
	},
	variants: {
		align: {
			left: { justifyContent: "flex-start" },
			center: { justifyContent: "center" },
			right: { justifyContent: "flex-end" },
		},
	},
});

export const dialogFade = cva({
	base: {
		w: "99%",
		h: 12,
		bgGradient: "to-t",
		gradientFrom: "bg.panel",
		gradientTo: "transparent",
		pos: "absolute",
		bottom: 14,
		zIndex: "10",
		mx: "1",
	},
});

export const dialogFooter = cva({
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		gap: "3",
		px: "6",
		pt: "2",
		pb: "4",
	},
	variants: {
		justify: {
			start: { justifyContent: "flex-start" },
			center: { justifyContent: "center" },
			end: { justifyContent: "flex-end" },
			between: { justifyContent: "space-between" },
		},
	},
	defaultVariants: {
		justify: "end",
	},
});

export const dialogDescription = cva({
	base: {
		mb: 6,
		mt: 2,
		fontSize: "base",
		color: "fg.muted",
	},
	variants: {
		variant: {
			muted: { color: "fg.muted" },
			subtle: { color: "fg.subtle" },
			default: { color: "fg.default" },
		},
	},
	defaultVariants: {
		variant: "muted",
	},
});

export const dialogClose = cva({
	base: {
		pos: "absolute",
		top: "3",
		insetEnd: "3",
		outline: "none",
	},
});

export type DialogBackdropVariants = RecipeVariantProps<typeof dialogBackdrop>;
export type DialogPositionerVariants = RecipeVariantProps<
	typeof dialogPositioner
>;
export type DialogPopupVariants = RecipeVariantProps<typeof dialogPopup>;
export type DialogBodyVariants = RecipeVariantProps<typeof dialogBody>;
export type DialogTitleVariants = RecipeVariantProps<typeof dialogTitle>;
export type DialogFooterVariants = RecipeVariantProps<typeof dialogFooter>;
export type DialogDescriptionVariants = RecipeVariantProps<
	typeof dialogDescription
>;
export type DialogCloseVariants = RecipeVariantProps<typeof dialogClose>;
