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
		h: "16",
		bg: "background.surface",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		px: "4",
		py: "2",
		borderBottom: "1px solid",
		borderColor: "border.subtle",
	},
});
