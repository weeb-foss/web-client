import { AvatarFallback, AvatarRoot } from "@/components/ui/info/avatar/avatar";
import { Heading } from "@/components/ui/info/heading/heading";
import { Text } from "@/components/ui/info/text/text";
import { Box, Divider, Flex, HStack, Stack, styled } from "@/styled-system/jsx";
import Tilt from "../misc/tilt";
import { Badge } from "@/components/ui/deco/badge/badge";
import { IconWrapper } from "../misc/icon-wrapper";
import { Image } from "@/components/ui/info/image/image";
import { Show } from "../util/show";

// todo: in the future, this interface should be connected with API
interface HGameCardProps {
	backgroundAsset: string;
	logoAsset: string;
	title: string;
	isNew: boolean;
	tilt?: boolean;
}

export default function HGameCard({
	backgroundAsset,
	logoAsset,
	title,
	isNew,
	tilt = false,
}: HGameCardProps) {
	return (
		<Tilt
			tiltEnable={tilt}
			glareEnable={tilt}
			tiltMaxAngleX={5}
			tiltMaxAngleY={5}
		>
			<Box
				bg="bg.subtle"
				minW="xs"
				w="full"
				h="full"
				cursor="pointer"
				rounded="xl"
				overflow="hidden"
				pos="relative"
				bgSize="cover"
				border="1px solid {colors.border}"
				ring="2px solid transparent"
				ringOffset={0.5}
				_hover={{ ringColor: "border.muted" }}
			>
				<Image
					src={backgroundAsset}
					alt={`${title} background`}
					top={0}
					left={0}
					w="full"
					h="min"
					objectFit="cover"
					className="mask-to-b"
					zIndex={"base"}
				/>
				<Flex
					pos="absolute"
					top={0}
					right={0}
					w="full"
					p={3}
					justifyContent="end"
				>
					<Image w={28} h="min" src={logoAsset} alt={title} />
				</Flex>
				<Stack p={3}>
					<HStack>
						<Heading>{title}</Heading>
						<Show when={isNew}>
							<Badge variant="soft" colorPalette="brand">
								<IconWrapper
									name="badge-alert"
									fill="brand.500/10"
									strokeWidth={3}
								/>
								NEW
							</Badge>
						</Show>
					</HStack>
					<HStack gap={1}>
						<IconWrapper name="users-round" color="brand.fg" w={4} h={4} />
						<Text size="sm">
							<styled.span color="brand.fg">2,500</styled.span> users are
							playing right now
						</Text>
					</HStack>

					<Divider borderColor="border" w="12" />
					<HStack>
						<HStack spaceX={-5}>
							{[...Array(3)].map((i) => (
								<AvatarRoot
									key={i}
									ring="3px solid {colors.bg.subtle}"
									size="sm"
								>
									<AvatarFallback size="xs">CH</AvatarFallback>
								</AvatarRoot>
							))}
							<AvatarRoot ring="3px solid {colors.bg.subtle}" size="sm">
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
