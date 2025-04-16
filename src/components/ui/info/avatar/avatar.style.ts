// styles/avatar.styles.ts
import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";

export const avatarRoot = cva({
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		rounded: "full",
		bg: "bg.muted",
	},
	variants: {
		size: {
			xs: { w: "6", h: "6" },
			sm: { w: "8", h: "8" },
			md: { w: "10", h: "10" },
			lg: { w: "12", h: "12" },
			xl: { w: "14", h: "14" },
			"2xl": { w: "16", h: "16" },
			"3xl": { w: "20", h: "20" },
			"4xl": { w: "24", h: "24" },
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export const avatarFallback = cva({
	base: {
		color: "text.subtle",
		fontWeight: "bold",
		bg: "bg.muted",
		w: "full",
		h: "full",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		rounded: "inherit",
	},
	variants: {
		size: {
			xs: { fontSize: "xs" },
			sm: { fontSize: "sm" },
			md: { fontSize: "md" },
			lg: { fontSize: "lg" },
			xl: { fontSize: "xl" },
			"2xl": { fontSize: "2xl" },
			"3xl": { fontSize: "3xl" },
			"4xl": { fontSize: "4xl" },
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type AvatarRootVariants = RecipeVariantProps<typeof avatarRoot>;
export type AvatarFallbackVariants = RecipeVariantProps<typeof avatarFallback>;
