import TestMenu from "@/components/modules/home/test-menu";
import { Heading } from "@/components/ui/info/heading/heading";
import type { HeadingVariants } from "@/components/ui/info/heading/heading.style";
import { Span, Text } from "@/components/ui/info/text/text";
import type { TextVariants } from "@/components/ui/info/text/text.style";
import { Container, Grid, GridItem, Stack } from "@/styled-system/jsx";
import config from "../../../brand.preset";
import HGameCard from "@/components/shared/cards/hgame";

const headingSizes = ["lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"];
const textSizes = ["xs", "sm", "md", "lg"];

export default function KitchenSinkPage() {
	// biome-ignore lint/style/noNonNullAssertion: fuck off this is a test
	const colors = Object.entries(config.theme?.extend?.tokens?.colors!);
	return (
		<Container py={24}>
			<Stack>
				{headingSizes.map((size) => (
					<Heading
						key={size}
						size={size as NonNullable<HeadingVariants>["size"]}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
						expedita at hic, vitae dolores maiores! Placeat laudantium
						necessitatibus dicta illum, consequuntur cum ab laboriosam dolores
						impedit unde voluptatum temporibus magnam?
					</Heading>
				))}
				{textSizes.map((size) => (
					<Text key={size} size={size as NonNullable<TextVariants>["size"]}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
						expedita at hic, vitae dolores maiores! Placeat laudantium
						necessitatibus dicta illum, consequuntur cum ab laboriosam dolores
						impedit unde voluptatum temporibus magnam?
					</Text>
				))}
				<TestMenu />
				<Grid columns={4}>
					{colors.map(([color, token]) => {
						return Object.entries(token).map(([c, t]) => (
							<GridItem key={c}>
								<Stack>
									<Span
										w={12}
										h={12}
										rounded="lg"
										style={{ backgroundColor: t.value }}
									/>
									<Text>
										{color}.{c}
									</Text>
								</Stack>
							</GridItem>
						));
					})}
				</Grid>
				<HGameCard />
			</Stack>
		</Container>
	);
}
