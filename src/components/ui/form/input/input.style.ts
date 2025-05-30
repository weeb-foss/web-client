import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";

export const input = cva({
	base: {
		display: "flex",
		width: "full",
		px: "3",
		py: "2",
		rounded: "lg",
		border: "1px solid",
		borderColor: {
			base: "border",
			_hover: "border.emphasized",
			_focus: "border.emphasized",
		},
		bg: {
			base: "bg.subtle",
			_hover: "bg.emphasized",
			_focus: "bg.emphasized",
		},
		color: "text.subtle",
		fontSize: "sm",
		transition: "fast",
		_placeholder: {
			color: "text.muted",
			textStyle: "xs",
		},
		_focus: {
			outline: "none",
			ring: "2px",
			ringColor: "brand",
			ringOffset: "1px",
			borderColor: "brand",
		},
		_disabled: {
			opacity: 0.5,
			cursor: "not-allowed",
		},
	},
	variants: {
		size: {
			sm: {
				py: "1",
				fontSize: "xs",
			},
			md: {
				py: "2",
				fontSize: "sm",
			},
			lg: {
				py: "3",
				fontSize: "md",
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type InputVariants = RecipeVariantProps<typeof input>;
