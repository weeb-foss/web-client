import { css } from "@/styled-system/css";
import ReactParallaxTilt, {
	type ReactParallaxTiltProps,
} from "react-parallax-tilt";

export default function Tilt({ children, ...props }: ReactParallaxTiltProps) {
	return (
		<ReactParallaxTilt
			scale={1.01}
			className={css({ rounded: "xl", w: "fit" })}
			tiltMaxAngleX={10}
			tiltMaxAngleY={10}
			glareEnable
			glareMaxOpacity={0.2}
			{...props}
		>
			{children}
		</ReactParallaxTilt>
	);
}
