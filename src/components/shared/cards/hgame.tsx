import { AvatarFallback, AvatarRoot } from "@/components/ui/info/avatar/avatar";
import { Heading } from "@/components/ui/info/heading/heading";
import { Span, Text } from "@/components/ui/info/text/text";
import { Box, Divider, HStack, Stack } from "@/styled-system/jsx";
import { UserRoundIcon } from "lucide-react";

// todo
// merely conceptual component
export default function HGameCard() {
	return (
		<Box
			bgSize={"cover"}
			w="1/4"
			h={"2/3"}
			rounded="xl"
			pos="relative"
			overflow={"hidden"}
		>
			<Box
				bg="brand"
				w="full"
				h="28"
				className="mask-to-b"
				pos="absolute"
				bgSize={"contain"}
				zIndex={"hide"}
				style={{ backgroundImage: "url('/assets/games/overwatch.png')" }}
			/>
			<Stack
				p={3}
				mt={16}
				bgGradient={"to-t"}
				gradientFrom={"background.subtle"}
				gradientVia={"background.subtle"}
				gradientTo={"transparent"}
				roundedBottom={"calc(var(--orb-radii-xl) - 0.10)"}
			>
				<Heading>Overwatch</Heading>
				<HStack gap={1}>
					<UserRoundIcon color={"var(--orb-colors-brand)"} size={16} />
					<Text size="sm">
						<Span color="brand">2,500</Span> users are playing right now
					</Text>
				</HStack>
				<Divider borderColor={"border"} w="12" />
				<HStack>
					<HStack spaceX={-5}>
						{[...Array(3)].map((key) => (
							<AvatarRoot
								ring={"3px solid {colors.background.subtle}"}
								key={key}
								size="sm"
							>
								<AvatarFallback size="xs">CH</AvatarFallback>
							</AvatarRoot>
						))}
						<AvatarRoot ring={"3px solid {colors.background.subtle}"} size="sm">
							<AvatarFallback size="xs">+1</AvatarFallback>
						</AvatarRoot>
					</HStack>
					<Text size="xs">4 friends are playing</Text>
				</HStack>
			</Stack>
		</Box>
	);
}
