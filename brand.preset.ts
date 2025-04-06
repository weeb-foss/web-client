import {
	defineAnimationStyles,
	definePreset,
	defineTokens,
} from "@pandacss/dev";

export const keyframes = {
	spin: {
		"0%": {
			transform: "rotate(0deg)",
		},
		"100%": {
			transform: "rotate(360deg)",
		},
	},
	pulse: {
		"50%": {
			opacity: "0.5",
		},
	},
	ping: {
		"75%, 100%": {
			transform: "scale(2)",
			opacity: "0",
		},
	},
	bounce: {
		"0%, 100%": {
			transform: "translateY(-25%)",
			animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
		},
		"50%": {
			transform: "none",
			animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
		},
	},
	"bg-position": {
		from: {
			backgroundPosition: "var(--animate-from, 1rem) 0",
		},
		to: {
			backgroundPosition: "var(--animate-to, 0) 0",
		},
	},
	position: {
		from: {
			insetInlineStart: "var(--animate-from-x)",
			insetBlockStart: "var(--animate-from-y)",
		},
		to: {
			insetInlineStart: "var(--animate-to-x)",
			insetBlockStart: "var(--animate-to-y)",
		},
	},
	"circular-progress": {
		"0%": {
			strokeDasharray: "1, 400",
			strokeDashoffset: "0",
		},
		"50%": {
			strokeDasharray: "400, 400",
			strokeDashoffset: "-100%",
		},
		"100%": {
			strokeDasharray: "400, 400",
			strokeDashoffset: "-260%",
		},
	},
	"expand-height": {
		from: {
			height: "0",
		},
		to: {
			height: "var(--height)",
		},
	},
	"collapse-height": {
		from: {
			height: "var(--height)",
		},
		to: {
			height: "0",
		},
	},
	"expand-width": {
		from: {
			width: "0",
		},
		to: {
			width: "var(--width)",
		},
	},
	"collapse-width": {
		from: {
			height: "var(--width)",
		},
		to: {
			height: "0",
		},
	},
	"fade-in": {
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
		},
	},
	"fade-out": {
		from: {
			opacity: 1,
		},
		to: {
			opacity: 0,
		},
	},
	"slide-from-left-full": {
		from: {
			translate: "-100% 0",
		},
		to: {
			translate: "0 0",
		},
	},
	"slide-from-right-full": {
		from: {
			translate: "100% 0",
		},
		to: {
			translate: "0 0",
		},
	},
	"slide-from-top-full": {
		from: {
			translate: "0 -100%",
		},
		to: {
			translate: "0 0",
		},
	},
	"slide-from-bottom-full": {
		from: {
			translate: "0 100%",
		},
		to: {
			translate: "0 0",
		},
	},
	"slide-to-left-full": {
		from: {
			translate: "0 0",
		},
		to: {
			translate: "-100% 0",
		},
	},
	"slide-to-right-full": {
		from: {
			translate: "0 0",
		},
		to: {
			translate: "100% 0",
		},
	},
	"slide-to-top-full": {
		from: {
			translate: "0 0",
		},
		to: {
			translate: "0 -100%",
		},
	},
	"slide-to-bottom-full": {
		from: {
			translate: "0 0",
		},
		to: {
			translate: "0 100%",
		},
	},
	"slide-from-top": {
		"0%": {
			translate: "0 -0.5rem",
		},
		to: {
			translate: "0",
		},
	},
	"slide-from-bottom": {
		"0%": {
			translate: "0 0.5rem",
		},
		to: {
			translate: "0",
		},
	},
	"slide-from-left": {
		"0%": {
			translate: "-0.5rem 0",
		},
		to: {
			translate: "0",
		},
	},
	"slide-from-right": {
		"0%": {
			translate: "0.5rem 0",
		},
		to: {
			translate: "0",
		},
	},
	"slide-to-top": {
		"0%": {
			translate: "0",
		},
		to: {
			translate: "0 -0.5rem",
		},
	},
	"slide-to-bottom": {
		"0%": {
			translate: "0",
		},
		to: {
			translate: "0 0.5rem",
		},
	},
	"slide-to-left": {
		"0%": {
			translate: "0",
		},
		to: {
			translate: "-0.5rem 0",
		},
	},
	"slide-to-right": {
		"0%": {
			translate: "0",
		},
		to: {
			translate: "0.5rem 0",
		},
	},
	"scale-in": {
		from: {
			scale: "0.95",
		},
		to: {
			scale: "1",
		},
	},
	"scale-out": {
		from: {
			scale: "1",
		},
		to: {
			scale: "0.95",
		},
	},
};

export const animationStyles = defineAnimationStyles({
	"slide-fade-in": {
		value: {
			transformOrigin: "var(--transform-origin)",
			"&[data-placement^=top]": {
				animationName: "slide-from-bottom, fade-in",
			},
			"&[data-placement^=bottom]": {
				animationName: "slide-from-top, fade-in",
			},
			"&[data-placement^=left]": {
				animationName: "slide-from-right, fade-in",
			},
			"&[data-placement^=right]": {
				animationName: "slide-from-left, fade-in",
			},
		},
	},
	"slide-fade-out": {
		value: {
			transformOrigin: "var(--transform-origin)",
			"&[data-placement^=top]": {
				animationName: "slide-to-bottom, fade-out",
			},
			"&[data-placement^=bottom]": {
				animationName: "slide-to-top, fade-out",
			},
			"&[data-placement^=left]": {
				animationName: "slide-to-right, fade-out",
			},
			"&[data-placement^=right]": {
				animationName: "slide-to-left, fade-out",
			},
		},
	},
	"scale-fade-in": {
		value: {
			transformOrigin: "var(--transform-origin)",
			animationName: "scale-in, fade-in",
		},
	},
	"scale-fade-out": {
		value: {
			transformOrigin: "var(--transform-origin)",
			animationName: "scale-out, fade-out",
		},
	},
});

export const colors = defineTokens.colors({
	brand: {
		DEFAULT: {
			value: "#1ba169",
		},
		hover: {
			value: "#0E8A5A",
		},
		highlight: {
			value: "#4ECB8A",
		},
	},
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
});

export const zIndex = defineTokens.zIndex({
	hide: {
		value: -1,
	},
	base: {
		value: 0,
	},
	docked: {
		value: 10,
	},
	dropdown: {
		value: 1000,
	},
	sticky: {
		value: 1100,
	},
	banner: {
		value: 1200,
	},
	overlay: {
		value: 1300,
	},
	modal: {
		value: 1400,
	},
	popover: {
		value: 1500,
	},
	skipNav: {
		value: 1600,
	},
	toast: {
		value: 1700,
	},
	tooltip: {
		value: 1800,
	},
	max: {
		value: 2147483647,
	},
});

export default definePreset({
	name: "brand-preset",
	theme: {
		animationStyles,
		tokens: {
			colors,
			zIndex,
		},
		keyframes,
	},
});
