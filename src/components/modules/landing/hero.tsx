import { IconWrapper } from "@/components/shared/misc/icon-wrapper";
import { ButtonLink } from "@/components/ui/form/button/button";
import { Heading } from "@/components/ui/info/heading/heading";
import { Image } from "@/components/ui/info/image/image";
import { Text } from "@/components/ui/info/text/text";
import { Center, HStack, styled, VStack } from "@/styled-system/jsx";

// pending review
export default function LandingHero() {
	return (
		<Center h="100vh" pos="relative" overflowX={"hidden"} overflowY={"clip"}>
			<Image
				src="/__mocked__/static/apex-char.png"
				alt="landing left image"
				w={"xl"}
				h={"min"}
				pos={"absolute"}
				left={-12}
				zIndex={"hide"}
				opacity={0.7}
			/>
			<VStack textAlign={"center"} pos="relative" maxW="3xl" gap={6}>
				<Image
					src="/__mocked__/static/hero.svg"
					alt="landing bg image"
					w={"5xl"}
					h={"3xl"}
					pos={"absolute"}
					bottom={-44}
					zIndex={"hide"}
				/>
				<Heading size="6xl">
					Enhance your{" "}
					<styled.span
						bgClip={"text"}
						bgGradient={"to-r"}
						gradientFrom={"brand.fg"}
						gradientTo={"brand.solid"}
						color="transparent"
					>
						gaming
					</styled.span>{" "}
					experience
				</Heading>
				<Text>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
					nesciunt obcaecati deleniti fugiat, odio quo ipsam cumque ipsum
					repudiandae incidunt quasi consequuntur, veniam placeat veritatis
					necessitatibus minima excepturi dolorem sunt!
				</Text>
				<ButtonLink
					href="/kitchen-sink"
					levitate
					pill
					variant="subtle"
					colorPalette={"bg"}
				>
					Kitchen sink
					<IconWrapper name="arrow-up-right" />
				</ButtonLink>
				<HStack>
					<Text size="xs">Not sure yet? Scroll down</Text>
					<IconWrapper name="mouse" w={5} h={5} color="fg.muted" />
				</HStack>
			</VStack>
			<Image
				src="/__mocked__/static/fragpunk-char.png"
				alt="landing right image"
				w={"3xl"}
				h={"min"}
				pos={"absolute"}
				right={-16}
				zIndex={"hide"}
				opacity={0.7}
			/>
		</Center>
	);
}
