import { Heading } from "@/components/ui/info/heading/heading";
import { HStack, styled } from "@/styled-system/jsx";

export default function Header() {
	return (
		<HeaderWrapper>
			<HStack>
				<Heading>Orbix</Heading>
			</HStack>
		</HeaderWrapper>
	);
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
		gradientFrom: "bg",
		gradientVia: "bg",
		gradientTo: "transparent",
		display: "flex",
		justifyContent: "space-between",
	},
});
