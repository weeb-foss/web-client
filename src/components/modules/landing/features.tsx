import { Heading } from "@/components/ui/info/heading/heading";
import { Span, Text } from "@/components/ui/info/text/text";
import { Container, Stack } from "@/styled-system/jsx";

export default function LandingFeatures() {
	return (
		<Container w="full">
			<Stack>
				<Heading>
					Games feel{" "}
					<Span
						bgClip={"text"}
						bgGradient={"to-r"}
						gradientFrom={"brand"}
						gradientTo={"brand.highlight"}
						color="transparent"
					>
						better
					</Span>{" "}
					with Orbix
				</Heading>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
					asperiores deserunt labore laudantium recusandae mollitia! Cupiditate,
					ipsum illo, rerum totam libero consectetur sequi corrupti optio magni
					a similique nihil veniam?
				</Text>
			</Stack>
		</Container>
	);
}
