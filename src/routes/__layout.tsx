import type { JSX } from "react";
import { type TuonoLayoutProps, TuonoScripts } from "tuono";

import "@/styles/global.css";

export default function RootLayout({
	children,
}: TuonoLayoutProps): JSX.Element {
	return (
		<html lang="en" dir="ltr">
			<body>
				<main>{children}</main>
				<TuonoScripts />
			</body>
		</html>
	);
}
