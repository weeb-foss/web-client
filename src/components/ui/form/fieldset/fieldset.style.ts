import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";

export const fieldsetRoot = cva({
	base: {
		display: "flex",
		flexDirection: "column",
		gap: "4",
	},
});

export type FieldsetRootVariants = RecipeVariantProps<typeof fieldsetRoot>;
