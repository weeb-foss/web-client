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
import HGameCard from "@/components/shared/cards/game/hgame";
import TestMenu from "@/components/modules/test/test-menu";
import VGameCard from "@/components/shared/cards/game/vgame";
import { TooltipProvider } from "@/components/ui/info/tooltip/tooltip";

// this is temporary.
const testGames = [
	{
		backgroundAsset: "/__mocked__/games/silenthill2/background.png",
		logoAsset: "/__mocked__/games/silenthill2/logo.png",
		title: "Silent Hill: 2",
		isNew: true,
	},
	{
		backgroundAsset: "/__mocked__/games/fragpunk/background.png",
		logoAsset: "/__mocked__/games/fragpunk/logo.png",
		title: "Fragpunk",
		isNew: true,
	},
	{
		backgroundAsset: "/__mocked__/games/haste/background.png",
		logoAsset: "/__mocked__/games/haste/logo.png",
		title: "Haste",
		isNew: true,
	},
	{
		backgroundAsset: "/__mocked__/games/eldenring/background.png",
		logoAsset: "/__mocked__/games/eldenring/logo.png",
		title: "Elden Ring",
		isNew: false,
	},
];

const vtestGames = [
	{
		backgroundAsset: "/__mocked__/games/silenthill2/grid.png",
		title: "Silent Hill: 2",
	},
	{
		backgroundAsset: "/__mocked__/games/fragpunk/grid.png",
		title: "Fragpunk",
	},
	{
		backgroundAsset: "/__mocked__/games/haste/grid.png",
		title: "Haste",
	},
	{
		backgroundAsset: "/__mocked__/games/eldenring/grid.png",
		title: "Elden Ring",
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
				<TooltipProvider>
					<Grid columns={8}>
						<For each={vtestGames}>
							{(game) => (
								<GridItem key={game.title}>
									<VGameCard tilt {...game} />
								</GridItem>
							)}
						</For>
					</Grid>
				</TooltipProvider>
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
