import { cva, type RecipeVariantProps } from "@/styled-system/css";

export const fieldRoot = cva({
	base: {
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		gap: "2",
		width: "full",
	},
	variants: {
		variant: {
			horizontal: {
				flexDirection: "row",
				alignItems: "center",
				gap: "4",
			},
		},
	},
});

export const fieldLabel = cva({
	base: {
		fontSize: "sm",
		fontWeight: "medium",
		color: "text",
		userSelect: "none",
	},
	variants: {
		required: {
			true: {
				_after: {
					content: '"*"',
					ml: "1",
					color: "fg.error",
				},
			},
		},
		disabled: {
			true: {
				opacity: 0.6,
				cursor: "not-allowed",
			},
		},
	},
});

export const fieldControl = cva({
	base: {
		position: "relative",
		width: "full",
	},
});

export const fieldDescription = cva({
	base: {
		fontSize: "xs",
		color: "fg.muted",
	},
});

export const fieldError = cva({
	base: {
		fontSize: "xs",
		color: "fg.error",
	},
});

export const fieldValidity = cva({
	base: {
		fontSize: "xs",
		color: "fg.success",
	},
});

export type FieldRootVariants = RecipeVariantProps<typeof fieldRoot>;
export type FieldLabelVariants = RecipeVariantProps<typeof fieldLabel>;
export type FieldControlVariants = RecipeVariantProps<typeof fieldControl>;
export type FieldDescriptionVariants = RecipeVariantProps<
	typeof fieldDescription
>;
export type FieldErrorVariants = RecipeVariantProps<typeof fieldError>;
export type FieldValidityVariants = RecipeVariantProps<typeof fieldValidity>;
