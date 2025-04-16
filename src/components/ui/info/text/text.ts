import { styled } from "@/styled-system/jsx";
import { Link } from "tuono";
import { text } from "./text.style";

export const Text = styled("p", text);

export const TextLink = styled(Link, {
	base: {
		...text.raw({}),
		color: "fg",
		_hover: {
			textDecoration: "underline",
		},
	},
});

export const Span = styled("span");
