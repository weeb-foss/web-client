import { AvatarFallback, AvatarRoot } from "@/components/ui/info/avatar/avatar";
import { Heading } from "@/components/ui/info/heading/heading";
import { Text } from "@/components/ui/info/text/text";
import { Box, Divider, Flex, HStack, Stack, styled } from "@/styled-system/jsx";
import Tilt from "../../misc/tilt";
import { Badge } from "@/components/ui/deco/badge/badge";
import { IconWrapper } from "../../misc/icon-wrapper";
import { Image } from "@/components/ui/info/image/image";
import { Show } from "../../util/show";
import {
	TooltipArrow,
	TooltipPopup,
	TooltipPortal,
	TooltipPositioner,
	TooltipProvider,
	TooltipRoot,
	TooltipTrigger,
} from "@/components/ui/info/tooltip/tooltip";
import Arrow from "@/components/icons/arrow";

// todo: in the future, this interface should be connected with API
interface HGameCardProps {
	backgroundAsset: string;
	logoAsset: string;
	title: string;
	isNew: boolean;
	tilt?: boolean;
}

// pending exhaustive tests
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
				_focusVisible={{ ringColor: "border.muted" }}
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
						<TooltipProvider>
							<TooltipRoot>
								<TooltipTrigger render={<Heading maxW="32" truncate />}>
									{title}
								</TooltipTrigger>
								<TooltipPortal>
									<TooltipPositioner>
										<TooltipPopup>
											<TooltipArrow>
												<Arrow />
											</TooltipArrow>
											{title}
										</TooltipPopup>
									</TooltipPositioner>
								</TooltipPortal>
							</TooltipRoot>
							<Show when={isNew}>
								<TooltipRoot>
									<TooltipTrigger
										render={
											<Badge
												textTransform={"uppercase"}
												variant="soft"
												colorPalette="cyan"
											/>
										}
									>
										<IconWrapper name="badge-alert" fill="currentColor/10" />
										New
									</TooltipTrigger>
									<TooltipPortal>
										<TooltipPositioner>
											<TooltipPopup>
												<TooltipArrow>
													<Arrow />
												</TooltipArrow>
												This game just arrived to Orbix
											</TooltipPopup>
										</TooltipPositioner>
									</TooltipPortal>
								</TooltipRoot>
							</Show>
							<TooltipRoot>
								<TooltipTrigger
									render={
										<Badge
											textTransform={"uppercase"}
											variant="soft"
											colorPalette="green"
										/>
									}
								>
									<IconWrapper name="scroll" fill="currentColor/10" />4 quests
								</TooltipTrigger>
								<TooltipPortal>
									<TooltipPositioner>
										<TooltipPopup>
											<TooltipArrow>
												<Arrow />
											</TooltipArrow>
											There are{" "}
											<styled.span color="green.fg">4 quests</styled.span>{" "}
											available for this game
										</TooltipPopup>
									</TooltipPositioner>
								</TooltipPortal>
							</TooltipRoot>
						</TooltipProvider>
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
