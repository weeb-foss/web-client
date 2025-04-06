import type { JSX } from "react";
import type { TuonoLayoutProps } from "tuono";
import LandingHeader from "@/components/shared/layout/landing-header";
import { Box, Stack } from "@/styled-system/jsx";
import { Heading } from "@/components/ui/info/heading/heading";
import { Button } from "@/components/ui/form/button/button";

export default function LandingLayout({
	children,
}: TuonoLayoutProps): JSX.Element {
	return (
		<Stack>
			<LandingHeader>
				<Heading size="xl">Orbix</Heading>
				<Button>Get the bot</Button>
			</LandingHeader>
			<Box>{children}</Box>
		</Stack>
	);
}
