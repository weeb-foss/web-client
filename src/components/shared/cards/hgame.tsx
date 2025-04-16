import {
	AvatarFallback,
	AvatarImage,
	AvatarRoot,
} from "@/components/ui/info/avatar/avatar";
import { Heading } from "@/components/ui/info/heading/heading";
import { Text } from "@/components/ui/info/text/text";
import { Box, Divider, Flex, HStack, Stack, styled } from "@/styled-system/jsx";
import Tilt from "../misc/tilt";
import { Badge } from "@/components/ui/deco/badge/badge";
import IconWrapper from "../misc/icon-wrapper";
import { Image } from "@/components/ui/info/image/image";

// todo
// merely conceptual component
export default function HGameCard() {
	return (
		<Tilt>
			<Box
				bgSize={"cover"}
				border="1px solid {colors.border}"
				cursor={"pointer"}
				w="xs"
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
					bgSize={"cover"}
					zIndex={"hide"}
					bgRepeat={"no-repeat"}
					style={{ backgroundImage: "url('/assets/games/sh2.png')" }}
				/>
				<Flex ml="auto" w="full" p={2} justifyContent={"end"} pos="absolute">
					<Image
						w={44}
						h="min"
						src="/assets/games/sh2logo.png"
						alt="silent hill 2"
					/>
				</Flex>
				<Stack
					p={3}
					mt={16}
					bgGradient={"to-t"}
					gradientFrom={"bg.subtle"}
					gradientVia={"bg.subtle"}
					gradientTo={"transparent"}
					roundedBottom={"calc(var(--orb-radii-xl) - 0.10)"}
				>
					<HStack>
						<Heading>Silent Hill: 2</Heading>
						<Badge variant="soft" colorPalette={"brand"}>
							<IconWrapper name="flame" />
							NEW
						</Badge>
					</HStack>
					<HStack gap={1}>
						<IconWrapper name="users-round" color="brand.fg" w={4} h={4} />
						<Text size="sm">
							<styled.span color="brand.fg">2,500</styled.span> users are
							playing right now
						</Text>
					</HStack>
					<Divider borderColor={"border"} w="12" />
					<HStack>
						<HStack spaceX={-5}>
							{[...Array(3)].map((key) => (
								<AvatarRoot
									ring={"3px solid {colors.bg.subtle}"}
									key={key}
									size="sm"
								>
									<AvatarFallback size="xs">CH</AvatarFallback>
								</AvatarRoot>
							))}
							<AvatarRoot ring={"3px solid {colors.bg.subtle}"} size="sm">
								<AvatarFallback size="xs">+1</AvatarFallback>
							</AvatarRoot>
						</HStack>
						<Text size="xs">4 friends are playing</Text>
					</HStack>
				</Stack>
			</Box>
		</Tilt>
	);
}
