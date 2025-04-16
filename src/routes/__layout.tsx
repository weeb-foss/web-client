import type { JSX } from "react";
import { type TuonoLayoutProps, TuonoScripts } from "tuono";

import "@/styles/global.css";
import Header from "@/components/shared/layout/header";
import { Container } from "@/styled-system/jsx";

// todo: implement dark/light theme support

export default function RootLayout({
	children,
}: TuonoLayoutProps): JSX.Element {
	return (
		<html lang="en" dir="ltr">
			<body className="dark">
				<Header />
				<main>
					<Container py={5} maxW="9xl">
						{children}
					</Container>
				</main>
				<TuonoScripts />
			</body>
		</html>
	);
}
