import { cva } from "@/styled-system/css";

export const fieldRoot = cva({
	base: {
		display: "flex",
		flexDirection: "column",
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
					color: "error",
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
		color: "text.muted",
	},
});

export const fieldError = cva({
	base: {
		fontSize: "xs",
		color: "error",
	},
});

export const fieldValidity = cva({
	base: {
		fontSize: "xs",
		color: "accents.green",
	},
});
