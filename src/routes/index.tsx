import LandingFeatures from "@/components/modules/landing/features";
import LandingHero from "@/components/modules/landing/hero";
import { Fragment } from "react";

export default function LandingPage() {
	return (
		<Fragment>
			<LandingHero />
			<LandingFeatures />
		</Fragment>
	);
}
