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
		borderColor: "border",
		bg: {
			base: "background.subtle",
			_hover: "background.content",
			_focus: "background.content",
		},
		color: "text.subtle",
		fontSize: "sm",
		transition: "fast",
		_placeholder: {
			color: "text.muted",
			fontStyle: "italic",
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
