import { ButtonLink } from "@/components/ui/form/button/button";
import { ArrowUpRightIcon } from "lucide-react";

export default function HomePage() {
	return (
		<ButtonLink colorPalette={"brand"} href="/kitchen-sink">
			Go to kitchen sink <ArrowUpRightIcon />
		</ButtonLink>
	);
}
