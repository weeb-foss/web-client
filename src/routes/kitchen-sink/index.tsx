import {
	Center,
	Container,
	Grid,
	GridItem,
	HStack,
	Stack,
} from "@/styled-system/jsx";
import {
	EmptyStateContent,
	EmptyStateDescription,
	EmptyStateIndicator,
	EmptyStateRoot,
	EmptyStateTitle,
} from "@/components/ui/info/empty-state/empty-state";
import { RotateCwIcon, ScrollIcon } from "lucide-react";
import { Button } from "@/components/ui/form/button/button";
import { For } from "@/components/shared/util/for";
import HGameCard from "@/components/shared/cards/hgame";
import TestMenu from "@/components/modules/test/test-menu";

// todo: delete this shit
const testGames = [
	{
		backgroundAsset: "/assets/games/silenthill2/background.png",
		logoAsset: "/assets/games/silenthill2/logo.png",
		title: "Silent Hill: 2",
		isNew: true,
	},
	{
		backgroundAsset: "/assets/games/fragpunk/background.png",
		logoAsset: "/assets/games/fragpunk/logo.png",
		title: "Fragpunk",
		isNew: true,
	},
	{
		backgroundAsset: "/assets/games/haste/background.png",
		logoAsset: "/assets/games/haste/logo.png",
		title: "Haste",
		isNew: true,
	},
	{
		backgroundAsset: "/assets/games/eldenring/background.png",
		logoAsset: "/assets/games/eldenring/logo.png",
		title: "Elden Ring",
		isNew: false,
	},
];

export default function KitchenSinkPage() {
	return (
		<Container py={24}>
			<Stack gap={12}>
				<TestMenu />
				<Grid columns={4}>
					<For each={testGames}>
						{(game) => (
							<GridItem key={game.title}>
								<HGameCard tilt {...game} />
							</GridItem>
						)}
					</For>
				</Grid>
				<Center>
					<EmptyStateRoot>
						<EmptyStateContent>
							<EmptyStateIndicator>
								<ScrollIcon />
							</EmptyStateIndicator>
							<EmptyStateTitle>Quest accepted</EmptyStateTitle>
							<EmptyStateDescription maxW="xl">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
								at facilis dolore delectus debitis, dolor eum. Nostrum quod
								natus molestiae hic. Asperiores nobis laudantium suscipit amet
								rerum quia quod non!
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
				</Center>
			</Stack>
		</Container>
	);
}
