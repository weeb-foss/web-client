import { cva, type RecipeVariantProps } from "@/styled-system/css";

export const emptyStateRoot = cva({
	base: {
		w: "full",
	},
});

export const emptyStateContent = cva({
	base: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		gap: 3,
	},
});

export const emptyStateIndicator = cva({
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "fg.subtle",
		_icon: {
			boxSize: "2em",
		},
	},
});

export const emptyStateTitle = cva({});

export const emptyStateDescription = cva({});

export type EmptyStateRootVariants = RecipeVariantProps<typeof emptyStateRoot>;
export type EmptyStateContentVariants = RecipeVariantProps<
	typeof emptyStateContent
>;
export type EmptyStateIndicatorVariants = RecipeVariantProps<
	typeof emptyStateIndicator
>;
export type EmptyStateTitleVariants = RecipeVariantProps<
	typeof emptyStateTitle
>;
export type EmptyStateDescriptionVariants = RecipeVariantProps<
	typeof emptyStateDescription
>;
