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
		fontWeight: "bold",
		w: "fit",
		_disabled: {
			opacity: 0.5,
			cursor: "not-allowed",
			pointerEvents: "none",
		},
		userSelect: "none",
		transitionDuration: "fast",
	},
	variants: {
		variant: {
			primary: {
				bg: {
					base: "brand.fg",
					_hover: "brand.solid",
				},
				color: "brand.subtle",
			},
			secondary: {
				bg: {
					base: "bg.muted",
					_hover: "bg.emphasized",
				},
			},
			ghost: {
				bg: {
					base: "transparent",
					_hover: "bg.muted",
				},
				color: "fg",
			},
			error: {
				bg: {
					base: "bg.error",
				},
				color: "fg.error",
			},
			link: {
				_hover: {
					opacity: 0.7,
					textDecoration: "underline",
				},
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
				"& svg": {
					w: 5,
					h: 5,
				},
			},
			md: {
				px: 4,
				py: 2,
				textStyle: "base",
				"& svg": {
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
				rounded: "xl",
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
		variant: "primary",
		size: "md",
		pill: false,
	},
});

export type ButtonVariants = RecipeVariantProps<typeof button>;
