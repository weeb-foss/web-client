import { cva, type RecipeVariantProps } from "@/styled-system/css";

export const image = cva({
	base: {},
	variants: {
		size: {
			sm: {
				w: "sm",
				h: "sm",
			},
			md: {
				w: "md",
				h: "md",
			},
			lg: {
				w: "lg",
				h: "lg",
			},
			xl: {
				w: "xl",
				h: "xl",
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type ImageVariants = RecipeVariantProps<typeof image>;
