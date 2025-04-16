import { Heading } from "@/components/ui/info/heading/heading";
import { Image } from "@/components/ui/info/image/image";
import { Text } from "@/components/ui/info/text/text";
import { Container, HStack, Stack, styled, VStack } from "@/styled-system/jsx";

export default function LandingFeatures() {
	return (
		<Container w="full">
			<Stack gap={12}>
				<HStack
					h={{
						md: "xs",
						base: "unset",
					}}
					justifyContent={"space-between"}
					flexDir={{
						md: "row",
						base: "column",
					}}
				>
					<Stack maxW="2xl">
						<Heading size="4xl">
							Complete{" "}
							<styled.span
								bgClip={"text"}
								bgGradient={"to-r"}
								gradientFrom={"red.fg"}
								gradientTo={"red.solid"}
								color="transparent"
							>
								quests
							</styled.span>{" "}
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
					h={{
						md: "xs",
						base: "unset",
					}}
					justifyContent={"space-between"}
					flexDir={{
						md: "row-reverse",
						base: "column",
					}}
				>
					<Stack maxW="2xl">
						<Heading size="4xl">
							Reach the{" "}
							<styled.span
								bgClip={"text"}
								bgGradient={"to-r"}
								gradientFrom={"cyan.fg"}
								gradientTo={"cyan.solid"}
								color="transparent"
							>
								top
							</styled.span>{" "}
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
				<VStack mx="auto" maxW="xl" textAlign={"center"}>
					<Heading>And more coming soon...</Heading>
					<Text>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
						dolores repellendus deleniti alias, ipsum sunt mollitia. Nam,
						ratione quod unde obcaecati tempora, incidunt atque fuga ad,
						accusamus laudantium voluptates minima.
					</Text>
				</VStack>
			</Stack>
		</Container>
	);
}
