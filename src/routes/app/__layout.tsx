import AppSidebar from "@/components/modules/app/sidebar";
import Header from "@/components/shared/layout/header";
import { Box, Container } from "@/styled-system/jsx";
import { flex } from "@/styled-system/patterns";
import { Fragment, type JSX } from "react";
import type { TuonoLayoutProps } from "tuono";

export default function AppLayout({ children }: TuonoLayoutProps): JSX.Element {
	return (
		<Fragment>
			<Header />
			<Container py={5} maxW="9xl" {...flex.raw({ gap: 5 })}>
				<AppSidebar />
				<Box>{children}</Box>
			</Container>
		</Fragment>
	);
}
