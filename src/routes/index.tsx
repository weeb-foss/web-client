import TestMenu from "@/components/modules/home/test-menu";
import { Heading } from "@/components/ui/info/heading/heading";
import type { HeadingVariants } from "@/components/ui/info/heading/heading.style";
import { Text } from "@/components/ui/info/text/text";
import type { TextVariants } from "@/components/ui/info/text/text.style";
import { Container, Stack } from "@/styled-system/jsx";

const headingSizes = ["lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"];
const textSizes = ["xs", "sm", "md", "lg"];

export default function Home() {
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
			</Stack>
		</Container>
	);
}
