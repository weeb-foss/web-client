import { Tooltip } from "@base-ui-components/react/tooltip";
import { styled } from "@/styled-system/jsx";
import { tooltipPositioner, tooltipPopup, tooltipArrow } from "./tooltip.style";

export const TooltipProvider = styled(Tooltip.Provider);
export const TooltipRoot = styled(Tooltip.Root);
export const TooltipTrigger = styled(Tooltip.Trigger);
export const TooltipPortal = styled(Tooltip.Portal);
export const TooltipPositioner = styled(Tooltip.Positioner, tooltipPositioner);
export const TooltipPopup = styled(Tooltip.Popup, tooltipPopup);
export const TooltipArrow = styled(Tooltip.Arrow, tooltipArrow);
