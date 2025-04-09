import { Menu } from "@base-ui-components/react/menu";
import { styled } from "@/styled-system/jsx";
import {
	menuBackdrop,
	menuPositioner,
	menuPopup,
	menuArrow,
	menuItem,
	menuSeparator,
	menuGroupLabel,
	menuRadioItem,
	menuCheckboxItem,
} from "./menu.style";

export const MenuRoot = styled(Menu.Root);
export const MenuTrigger = styled(Menu.Trigger);
export const MenuPortal = styled(Menu.Portal);
export const MenuBackdrop = styled(Menu.Backdrop, menuBackdrop);
export const MenuPositioner = styled(Menu.Positioner, menuPositioner);
export const MenuPopup = styled(Menu.Popup, menuPopup);
export const MenuArrow = styled(Menu.Arrow, menuArrow);
export const MenuItem = styled(Menu.Item, menuItem);
export const MenuSeparator = styled(Menu.Separator, menuSeparator);
export const MenuGroup = styled(Menu.Group);
export const MenuGroupLabel = styled(Menu.GroupLabel, menuGroupLabel);
export const MenuRadioGroup = styled(Menu.RadioGroup);
export const MenuRadioItem = styled(Menu.RadioItem, menuRadioItem);
export const MenuCheckboxItem = styled(Menu.CheckboxItem, menuCheckboxItem);
