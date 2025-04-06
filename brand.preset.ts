import { definePreset } from "@pandacss/dev";

export default definePreset({
	name: "brand-preset",
	theme: {
		tokens: {
			colors: {
				background: {
					DEFAULT: {
						value: "#101211",
					},
					content: {
						value: "#202221",
					},
					surface: {
						value: "#272a29",
					},
				},
				border: {
					DEFAULT: {
						value: "#373b39",
					},
					subtle: {
						value: "#4b4f4d",
					},
				},
				text: {
					DEFAULT: {
						value: "#FFFFFF",
					},
					subtle: {
						value: "#E0E0E0",
					},
					muted: {
						value: "#A0A0A0",
					},
				},
				accent: {
					error: {
						value: "#FF6B6B",
					},
				},
			},
		},
	},
});
