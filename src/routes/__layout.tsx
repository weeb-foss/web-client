import type { JSX } from "react";
import { type TuonoLayoutProps, TuonoScripts } from "tuono";

import "@/styles/global.css";

// todo: implement dark/light theme support

export default function RootLayout({
	children,
}: TuonoLayoutProps): JSX.Element {
	return (
		<html lang="en" dir="ltr">
			<body className="dark">
				<main>{children}</main>
				<TuonoScripts />
			</body>
		</html>
	);
}
