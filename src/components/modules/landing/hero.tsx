import { Button } from "@/components/ui/form/button/button";
import { Heading } from "@/components/ui/info/heading/heading";
import { Image } from "@/components/ui/info/image/image";
import { Span, Text } from "@/components/ui/info/text/text";
import { Center, VStack } from "@/styled-system/jsx";
import { ArrowUpRightIcon } from "lucide-react";

export default function LandingHero() {
	return (
		<Center h="70vh" pos="relative" overflowX={"hidden"}>
			<Image
				src="/assets/apex-char.png"
				alt="landing left image"
				w={"xl"}
				h={"xl"}
				pos={"absolute"}
				left={-12}
				zIndex={"hide"}
			/>
			<VStack textAlign={"center"} pos="relative" maxW="3xl" gap={6}>
				<Image
					src="/assets/hero.svg"
					alt="landing bg image"
					w={"5xl"}
					h={"3xl"}
					pos={"absolute"}
					bottom={-44}
					zIndex={"hide"}
				/>
				<Heading size="6xl">
					Enhance your{" "}
					<Span
						bgClip={"text"}
						bgGradient={"to-r"}
						gradientFrom={"brand"}
						gradientTo={"brand.highlight"}
						color="transparent"
					>
						gaming
					</Span>{" "}
					experience
				</Heading>
				<Text>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
					nesciunt obcaecati deleniti fugiat, odio quo ipsam cumque ipsum
					repudiandae incidunt quasi consequuntur, veniam placeat veritatis
					necessitatibus minima excepturi dolorem sunt!
				</Text>
				<Button levitate pill variant="secondary">
					Start your journey
					<ArrowUpRightIcon />
				</Button>
				<Text size="xs">Not sure yet? Scroll down</Text>
			</VStack>
			<Image
				src="/assets/fragpunk-char.png"
				alt="landing right image"
				w={"3xl"}
				h={"xl"}
				pos={"absolute"}
				right={-16}
				zIndex={"hide"}
			/>
		</Center>
	);
}
