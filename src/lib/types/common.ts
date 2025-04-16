import type { Styles } from "@/styled-system/css";
import type { RefObject } from "react";

export type StateChangeReason =
	| "click"
	| "hover"
	| "focus"
	| "focus-out"
	| "escape-key"
	| "outside-press"
	| "trigger-press";

export type WithDialogProps<T = unknown> = T & {
	open?: boolean;
	onOpenChange?: (
		open: boolean,
		event?: Event,
		reason?: StateChangeReason,
	) => void;
	focusRef?: RefObject<HTMLButtonElement | null>;
};

export type WithStyles<T = unknown> = T & Styles;
