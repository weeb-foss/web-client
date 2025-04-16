import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Preset to use
	presets: ["@chakra-ui/panda-preset"],

	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			semanticTokens: {
				colors: {
					brand: {
						contrast: {
							value: {
								_light: "white",
								_dark: "white",
							},
						},
						fg: {
							value: {
								_light: "{colors.brand.700}",
								_dark: "{colors.brand.300}",
							},
						},
						subtle: {
							value: {
								_light: "{colors.brand.100}",
								_dark: "{colors.brand.900}",
							},
						},
						muted: {
							value: {
								_light: "{colors.brand.200}",
								_dark: "{colors.brand.800}",
							},
						},
						emphasized: {
							value: {
								_light: "{colors.brand.300}",
								_dark: "{colors.brand.700}",
							},
						},
						solid: {
							value: {
								_light: "{colors.brand.600}",
								_dark: "{colors.brand.600}",
							},
						},
						focusRing: {
							value: {
								_light: "{colors.brand.600}",
								_dark: "{colors.brand.600}",
							},
						},
					},
				},
			},
			tokens: {
				colors: {
					brand: {
						50: {
							value: "#f0fdfa",
						},
						100: {
							value: "#ccfbf1",
						},
						200: {
							value: "#99f6e4",
						},
						300: {
							value: "#5eead4",
						},
						400: {
							value: "#2dd4bf",
						},
						500: {
							value: "#14b8a6",
						},
						600: {
							value: "#0d9488",
						},
						700: {
							value: "#0c5d56",
						},
						800: {
							value: "#114240",
						},
						900: {
							value: "#032726",
						},
						950: {
							value: "#021716",
						},
					},
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "src/styled-system",

	// The framework you are using
	jsxFramework: "react",

	// Prefix for generated class names
	prefix: "orb",

	// Global css
	globalCss: {
		extend: {
			body: {
				bg: "bg",
				color: "fg",
				fontFamily: "Geist, sans-serif",
			},
		},
	},
});
