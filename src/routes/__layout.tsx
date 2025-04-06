import type { ReactNode, JSX } from "react";
import { TuonoScripts } from "tuono";

import "@/styles/global.css";

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
	return (
		<html lang="en" dir="ltr">
			<body>
				<main>{children}</main>
				<TuonoScripts />
			</body>
		</html>
	);
}
