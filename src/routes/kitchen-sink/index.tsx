import TestMenu from "@/components/modules/test/test-menu";
import { Heading } from "@/components/ui/info/heading/heading";
import type { HeadingVariants } from "@/components/ui/info/heading/heading.style";
import { Text } from "@/components/ui/info/text/text";
import type { TextVariants } from "@/components/ui/info/text/text.style";
import {
	Container,
	Grid,
	GridItem,
	HStack,
	Stack,
	styled,
} from "@/styled-system/jsx";
import config from "../../../panda.config";
import preset from "@chakra-ui/panda-preset";
import HGameCard from "@/components/shared/cards/hgame";
import {
	EmptyStateContent,
	EmptyStateDescription,
	EmptyStateIndicator,
	EmptyStateRoot,
	EmptyStateTitle,
} from "@/components/ui/info/empty-state/empty-state";
import { RotateCwIcon, ScrollIcon } from "lucide-react";
import { Button } from "@/components/ui/form/button/button";

const headingSizes = ["lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"];
const textSizes = ["xs", "sm", "md", "lg"];

export default function KitchenSinkPage() {
	const colors = Object.entries({
		// biome-ignore lint/style/noNonNullAssertion: fuck off this is a test
		...config.theme?.extend?.tokens?.colors!,
		// biome-ignore lint/style/noNonNullAssertion: fuck off this is a test
		...preset.theme?.extend?.tokens?.colors!,
	});
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
									<styled.span
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
				<EmptyStateRoot>
					<EmptyStateContent maxW="xl">
						<EmptyStateIndicator>
							<ScrollIcon />
						</EmptyStateIndicator>
						<EmptyStateTitle>Quest accepted</EmptyStateTitle>
						<EmptyStateDescription>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam at
							facilis dolore delectus debitis, dolor eum. Nostrum quod natus
							molestiae hic. Asperiores nobis laudantium suscipit amet rerum
							quia quod non!
						</EmptyStateDescription>
						<HStack>
							<Button colorPalette={"brand"}>Ok, got it</Button>
							<Button colorPalette={"bg"} variant="subtle">
								Reroll quest
								<RotateCwIcon />
							</Button>
						</HStack>
					</EmptyStateContent>
				</EmptyStateRoot>
			</Stack>
		</Container>
	);
}
