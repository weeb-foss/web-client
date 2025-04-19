import { cva } from "@/styled-system/css";
import type { RecipeVariantProps } from "@/styled-system/css";

export const meterRoot = cva({
	base: {
		boxSizing: "border-box",
		display: "grid",
		w: "48",
		gridTemplateColumns: "repeat(2, 1fr)",
		gap: "2",
	},
});

export const meterLabel = cva({
	base: {
		fontSize: "sm",
		fontWeight: "medium",
		color: "fg",
	},
});

export const meterValue = cva({
	base: {
		gridColumnStart: "2",
		m: "0",
		textAlign: "right",
		fontSize: "sm",
		lineHeight: "5",
		color: "fg.muted",
	},
});

export const meterTrack = cva({
	base: {
		gridColumn: "span 2",
		display: "block",
		h: "2",
		w: "48",
		overflow: "hidden",
		bg: "background.subtle",
		boxShadow: "inset 0 0 0 1px {colors.border}",
	},
});

export const meterIndicator = cva({
	base: {
		display: "block",
		bg: "border.muted",
		transition: "all 500ms",
	},
});

// todo
export type MeterVariants = RecipeVariantProps<typeof meterIndicator>;
