import { Avatar as BaseAvatar } from "@base-ui-components/react/avatar";
import { styled } from "@/styled-system/jsx";
import { avatarRoot, avatarFallback } from "./avatar.style";

export const AvatarRoot = styled(BaseAvatar.Root, avatarRoot);
export const AvatarImage = styled(
	BaseAvatar.Image,
	{
		base: {
			w: "full",
			h: "full",
			rounded: "inherit",
		},
	},
	{
		defaultProps: {
			loading: "lazy",
			draggable: false,
		},
	},
);

export const AvatarFallback = styled(BaseAvatar.Fallback, avatarFallback);
