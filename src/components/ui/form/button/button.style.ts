import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/types";

export const button = cva({
	base: {
		alignItems: "center",
		display: "inline-flex",
		gap: 2,
		justifyContent: "center",
		position: "relative",
		whiteSpace: "nowrap",
		cursor: "pointer",
		transitionDuration: "fast",
		fontWeight: "bold",
		w: "fit",
		_disabled: {
			opacity: 0.5,
			cursor: "not-allowed",
			pointerEvents: "none",
		},
		userSelect: "none",
	},
	variants: {
		variant: {
			primary: {
				bg: {
					base: "brand",
					_hover: "brand.hover",
					_active: "brand.highlight",
				},
				color: "background",
			},
			secondary: {
				bg: {
					base: "background.content",
					_hover: "background.content",
				},
				color: {
					base: "text.subtle",
				},
			},
			ghost: {
				bg: {
					base: "transparent",
					_hover: "background.content",
				},
				color: "text",
			},
			error: {
				bg: {
					base: "error",
					_hover: "error/90",
					_active: "error/70",
				},
				color: "text",
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
				px: 5,
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
				rounded: "lg",
			},
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
		pill: false,
	},
});

export type ButtonVariants = RecipeVariantProps<typeof button>;
