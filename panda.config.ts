import { defineConfig } from "@pandacss/dev";
import brandPreset from "./brand.preset";

export default defineConfig({
	// Preset to use
	presets: [brandPreset],

	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: "src/styled-system",

	// The framework you are using
	jsxFramework: "react",

	// Prefix for generated class names
	prefix: "orb",
});
