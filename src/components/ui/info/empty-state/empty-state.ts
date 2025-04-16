import { styled } from "@/styled-system/jsx";
import {
	emptyStateContent,
	emptyStateDescription,
	emptyStateIndicator,
	emptyStateRoot,
	emptyStateTitle,
} from "./empty-state.style";
import { Text } from "../text/text";
import { Heading } from "../heading/heading";

export const EmptyStateRoot = styled(styled.div, emptyStateRoot);

export const EmptyStateContent = styled(styled.div, emptyStateContent);

export const EmptyStateIndicator = styled(styled.div, emptyStateIndicator);

export const EmptyStateTitle = styled(Heading, emptyStateTitle);

export const EmptyStateDescription = styled(Text, emptyStateDescription);
