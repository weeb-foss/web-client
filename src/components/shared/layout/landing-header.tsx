import { styled } from "@/styled-system/jsx";
import type { PropsWithChildren } from "react";

export default function LandingHeader({ children }: PropsWithChildren) {
	return <HeaderWrapper>{children}</HeaderWrapper>;
}

const HeaderWrapper = styled("header", {
	base: {
		zIndex: "docked",
		position: "sticky",
		top: 0,
		w: "full",
		px: 6,
		py: 5,
		bgGradient: "to-b",
		gradientFrom: "background",
		gradientVia: "background",
		gradientTo: "transparent",
		display: "flex",
		justifyContent: "space-between",
	},
});
