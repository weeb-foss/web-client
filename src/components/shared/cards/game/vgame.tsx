import { Box } from "@/styled-system/jsx";
import Tilt from "../../misc/tilt";
import { Image } from "@/components/ui/info/image/image";
import {
	TooltipArrow,
	TooltipPopup,
	TooltipPortal,
	TooltipPositioner,
	TooltipRoot,
	TooltipTrigger,
} from "@/components/ui/info/tooltip/tooltip";
import Arrow from "@/components/icons/arrow";

// todo: in the future, this interface should be connected with API
interface VGameCardProps {
	backgroundAsset: string;
	title: string;
	tilt?: boolean;
}

// unfinished
export default function VGameCard({
	backgroundAsset,
	title,
	tilt = false,
}: VGameCardProps) {
	return (
		<TooltipRoot>
			<Tilt
				tiltEnable={tilt}
				glareEnable={tilt}
				tiltMaxAngleX={5}
				tiltMaxAngleY={5}
			>
				<TooltipTrigger
					render={
						<Box
							cursor={"pointer"}
							ring="2px solid transparent"
							ringOffset={0.5}
							_hover={{ ringColor: "border.muted" }}
							_focusVisible={{ ringColor: "border.muted" }}
							w="full"
							h="64"
							rounded="lg"
							overflow="hidden"
						/>
					}
				>
					<Image objectFit={"cover"} w="full" h="full" src={backgroundAsset} />
				</TooltipTrigger>
			</Tilt>
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
	);
}
