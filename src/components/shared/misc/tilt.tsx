import { css } from "@/styled-system/css";
import ReactParallaxTilt, {
	type ReactParallaxTiltProps,
} from "react-parallax-tilt";

// todo: convert this component into a panda factory component
export default function Tilt({ children, ...props }: ReactParallaxTiltProps) {
	return (
		<ReactParallaxTilt
			className={css({ rounded: "xl", w: "full", _active: { scale: 0.98 } })}
			tiltMaxAngleX={props.tiltMaxAngleX ?? 10} // todo: idk if this is necessary, i'll see later.
			tiltMaxAngleY={props.tiltMaxAngleY ?? 10}
			glareEnable={props.glareEnable ?? true}
			glareMaxOpacity={props.glareEnable ? 0.08 : 0}
			glarePosition="all"
			{...props}
		>
			{children}
		</ReactParallaxTilt>
	);
}
