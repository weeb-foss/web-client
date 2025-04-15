import { styled } from "@/styled-system/jsx";
import { image } from "./image.style";

export const Image = styled("img", image, {
	defaultProps: {
		draggable: false,
	},
});
