import { Button } from "@/components/ui/form/button/button";
import { Heading } from "@/components/ui/info/heading/heading";
import { Span, Text } from "@/components/ui/info/text/text";
import { css } from "@/styled-system/css";
import { Center, VStack } from "@/styled-system/jsx";
import { RocketIcon } from "lucide-react";

export default function LandingPage() {
	return (
		<Center h="70vh" pos="relative" overflowX={"hidden"}>
			<img
				src="/assets/apex-char.png"
				alt="hero bg"
				className={css({
					w: "xl",
					pos: "absolute",
					left: -16,
					zIndex: "hide",
				})}
			/>
			<VStack textAlign={"center"} pos="relative" maxW="3xl">
				<img
					src="/assets/hero.svg"
					alt="hero bg"
					className={css({ pos: "absolute", w: "5xl", zIndex: "hide" })}
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
				<Button>
					Begin your adventure
					<RocketIcon />
				</Button>
			</VStack>
			<img
				src="/assets/fragpunk-char.png"
				alt="hero bg"
				className={css({
					w: "3xl",
					pos: "absolute",
					right: -16,
					zIndex: "hide",
				})}
			/>
		</Center>
	);
}
