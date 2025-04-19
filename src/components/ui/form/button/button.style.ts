import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/types";

export const button = cva({
	base: {
		outline: "none",
		alignItems: "center",
		display: "inline-flex",
		gap: 2,
		justifyContent: "center",
		position: "relative",
		whiteSpace: "nowrap",
		cursor: "pointer",
		fontWeight: "semibold",
		w: "fit",
		_disabled: {
			opacity: 0.5,
			cursor: "not-allowed",
			pointerEvents: "none",
		},
		_focusVisible: {
			ring: "2px solid {colors.brand.focusRing}",
		},
		userSelect: "none",
		transitionDuration: "fast",
	},
	variants: {
		variant: {
			solid: {
				bg: "colorPalette.solid",
				color: "colorPalette.contrast",
				borderColor: "transparent",
				_hover: {
					bg: "colorPalette.solid/90",
				},
				_expanded: {
					bg: "colorPalette.solid/90",
				},
			},
			subtle: {
				bg: "colorPalette.subtle",
				color: "colorPalette.fg",
				borderColor: "transparent",
				_hover: {
					bg: "colorPalette.muted",
				},
				_expanded: {
					bg: "colorPalette.muted",
				},
			},
			surface: {
				bg: "colorPalette.subtle",
				color: "colorPalette.fg",
				shadow: "0 0 0px 1px var(--shadow-color)",
				shadowColor: "colorPalette.muted",
				_hover: {
					bg: "colorPalette.muted",
				},
				_expanded: {
					bg: "colorPalette.muted",
				},
			},

			outline: {
				borderWidth: "1px",
				borderColor: "colorPalette.muted",
				color: "colorPalette.fg",
				_hover: {
					bg: "colorPalette.subtle",
				},
				_expanded: {
					bg: "colorPalette.subtle",
				},
			},
			ghost: {
				bg: "transparent",
				color: "colorPalette.fg",
				_hover: {
					bg: "colorPalette.subtle",
				},
				_expanded: {
					bg: "colorPalette.subtle",
				},
			},
			plain: {
				color: "colorPalette.fg",
			},
		},
		size: {
			xs: {
				px: 3,
				py: 1.5,
				textStyle: "xs",
			},
			sm: {
				px: 4,
				py: 1.5,
				textStyle: "sm",
				_icon: {
					w: 5,
					h: 5,
				},
			},
			md: {
				px: 4,
				py: 2,
				textStyle: "base",
				_icon: {
					w: 5,
					h: 5,
				},
			},
			lg: {
				px: 6,
				py: 2,
				textStyle: "lg",
			},
			xl: {
				px: 5,
				py: 4,
				textStyle: "xl",
			},
		},
		pill: {
			true: {
				rounded: "full",
			},
			false: {
				rounded: "lg",
			},
		},
		levitate: {
			true: {
				_hover: {
					scale: 1.05,
				},
				_active: {
					scale: 0.95,
				},
			},
			false: {},
		},
	},
	defaultVariants: {
		variant: "solid",
		size: "md",
		pill: false,
		levitate: false,
	},
});

export type ButtonVariants = RecipeVariantProps<typeof button>;
