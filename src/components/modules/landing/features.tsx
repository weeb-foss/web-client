import { Heading } from "@/components/ui/info/heading/heading";
import { Image } from "@/components/ui/info/image/image";
import { Span, Text } from "@/components/ui/info/text/text";
import { Container, HStack, Stack } from "@/styled-system/jsx";

export default function LandingFeatures() {
	return (
		<Container w="full">
			<Stack>
				<HStack h={"xs"} justifyContent={"space-between"}>
					<Stack maxW="2xl">
						<Heading size="4xl">
							Complete{" "}
							<Span
								bgClip={"text"}
								bgGradient={"to-r"}
								gradientFrom={"brand"}
								gradientTo={"brand.highlight"}
								color="transparent"
							>
								quests
							</Span>{" "}
							and get currency for it
						</Heading>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
							asperiores deserunt labore laudantium recusandae mollitia!
							Cupiditate, ipsum illo, rerum totam libero consectetur sequi
							corrupti optio magni a similique nihil veniam?
						</Text>
					</Stack>
					<HStack w="1/2" justifyContent={"center"}>
						<Image src="/assets/quests.png" w="full" objectFit={"contain"} />
					</HStack>
				</HStack>
				<HStack
					h={"xs"}
					justifyContent={"space-between"}
					flexDir={"row-reverse"}
				>
					<Stack maxW="2xl">
						<Heading size="4xl">
							Reach the{" "}
							<Span
								bgClip={"text"}
								bgGradient={"to-r"}
								gradientFrom={"accent.sky/80"}
								gradientTo={"accent.sky"}
								color="transparent"
							>
								top
							</Span>{" "}
							in the leaderboard
						</Heading>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
							asperiores deserunt labore laudantium recusandae mollitia!
							Cupiditate, ipsum illo, rerum totam libero consectetur sequi
							corrupti optio magni a similique nihil veniam?
						</Text>
					</Stack>
					<HStack w="xl" justifyContent={"center"}>
						<Image
							src="/assets/leaderboard.png"
							w="full"
							objectFit={"contain"}
						/>
					</HStack>
				</HStack>
			</Stack>
		</Container>
	);
}
