// Modified version of "Tilty"

import {
	useState,
	useRef,
	useEffect,
	useLayoutEffect,
	useCallback,
} from "react";
import type { ReactNode } from "react";
import { css, cx } from "@/styled-system/css";

export interface TiltChangeDetails {
	tiltX: string;
	tiltY: string;
	percentageX: number;
	percentageY: number;
	angle: number;
}

export interface TiltChangeEvent {
	detail: TiltChangeDetails;
}

export type TiltChangeEventHandler = (event: TiltChangeEvent) => void;

export interface Coordinates {
	clientX: number;
	clientY: number;
}

export interface TiltyProps {
	className?: string;
	style?: React.CSSProperties;
	reverse?: boolean;
	max?: number;
	perspective?: number;
	easing?: string;
	speed?: number;
	scale?: number;
	axis?: "X" | "Y";
	reset?: boolean;
	glare?: boolean;
	maxGlare?: number;
	glareStyle?: React.CSSProperties;
	onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
	onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
	onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
	onTiltChange?: TiltChangeEventHandler;
	children: ReactNode;
}

const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Tilt({
	style = {},
	className = "",
	reverse = false,
	max = 10,
	perspective = 1000,
	easing = "cubic-bezier(0.03,0.98,0.52,0.99)",
	speed = 300,
	scale = 1.02,
	axis,
	reset = true,
	glare = true,
	maxGlare = 0.5,
	glareStyle = {},
	onMouseEnter = () => {},
	onMouseMove = () => {},
	onMouseLeave = () => {},
	onTiltChange = () => {},
	children,
}: TiltyProps) {
	const [styleState, setStyle] = useState<React.CSSProperties>({
		position: "relative",
		willChange: "transform",
	});
	const [glareStyleState, setGlareStyle] = useState<React.CSSProperties>({
		position: "absolute",
		top: "50%",
		left: "50%",
		pointerEvents: "none",
		backgroundImage:
			"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)",
		transform: "rotate(180deg) translate(-50%, -50%)",
		transformOrigin: "0% 0%",
		opacity: "0",
	});

	const width = useRef<number>(0);
	const height = useRef<number>(0);
	const left = useRef<number>(0);
	const top = useRef<number>(0);
	const transitionTimeout = useRef<number | null>(null);
	const updateCall = useRef<number | null>(null);

	const reverseNum = reverse ? 1 : -1;

	const element = useRef<HTMLDivElement>(null);

	useEffect(
		() => () => {
			if (transitionTimeout.current) {
				clearTimeout(transitionTimeout.current);
			}
			if (typeof window !== "undefined" && updateCall.current) {
				window.cancelAnimationFrame(updateCall.current);
			}
		},
		[],
	);

	useEffect(() => {
		if (!glare || typeof window === "undefined") {
			return () => {};
		}

		const updateGlareSize = () => {
			const { current: currentEl } = element;
			if (currentEl !== null) {
				setGlareStyle((prevGlareStyle) => ({
					...prevGlareStyle,
					width: currentEl.offsetWidth * 2,
					height: currentEl.offsetWidth * 2,
				}));
			}
		};

		window.addEventListener("resize", updateGlareSize);

		return () => {
			window.removeEventListener("resize", updateGlareSize);
		};
	}, [glare]);

	useIsomorphicLayoutEffect(() => {
		const { current: currentEl } = element;
		if (currentEl !== null) {
			setGlareStyle((prevGlareStyle) => ({
				...prevGlareStyle,
				width: currentEl.offsetWidth * 2,
				height: currentEl.offsetWidth * 2,
			}));
		}
	}, []);

	const updateElementPosition = () => {
		const { current: currentEl } = element;
		if (currentEl !== null) {
			const rect = currentEl.getBoundingClientRect();
			width.current = currentEl.offsetWidth;
			height.current = currentEl.offsetHeight;
			left.current = rect.left;
			top.current = rect.top;
		}
	};

	const getValues = useCallback(
		(coordinates: Coordinates) => {
			let x = (coordinates.clientX - left.current) / width.current;
			let y = (coordinates.clientY - top.current) / height.current;

			x = Math.min(Math.max(x, 0), 1);
			y = Math.min(Math.max(y, 0), 1);

			const tiltX = (reverseNum * (max / 2 - x * max)).toFixed(2);
			const tiltY = (reverseNum * (y * max - max / 2)).toFixed(2);

			const angle =
				Math.atan2(
					coordinates.clientX - (left.current + width.current / 2),
					-(coordinates.clientY - (top.current + height.current / 2)),
				) *
				(180 / Math.PI);

			const percentageX = x * 100;
			const percentageY = y * 100;

			return {
				tiltX,
				tiltY,
				percentageX,
				percentageY,
				angle,
			};
		},
		[max, reverseNum],
	);

	const update = useCallback(
		(coordinates: Coordinates) => {
			const values = getValues(coordinates);

			setStyle((prevStyle) => ({
				...prevStyle,
				transform: `perspective(${perspective}px) rotateX(${
					axis?.toLowerCase() === "x" ? 0 : values.tiltY
				}deg) rotateY(${
					axis?.toLowerCase() === "y" ? 0 : values.tiltX
				}deg) scale3d(${scale}, ${scale}, ${scale})`,
			}));

			if (glare) {
				setGlareStyle((prevGlareStyle) => ({
					...prevGlareStyle,
					transform: `rotate(${values.angle}deg) translate(-50%, -50%)`,
					opacity: (values.percentageY * maxGlare) / 100,
				}));
			}

			if (element.current) {
				element.current.dispatchEvent(
					new CustomEvent("tiltChange", {
						detail: values,
					}),
				);
			}

			onTiltChange({ detail: values });

			updateCall.current = null;
		},
		[axis, getValues, glare, maxGlare, perspective, scale, onTiltChange],
	);

	const setTransition = () => {
		if (transitionTimeout.current) {
			clearTimeout(transitionTimeout.current);
			transitionTimeout.current = null;
		}

		setStyle((prevStyle) => ({
			...prevStyle,
			transition: `${speed}ms ${easing}`,
		}));

		transitionTimeout.current = setTimeout(() => {
			setStyle((prevStyle) => ({
				...prevStyle,
				transition: "",
			}));
		}, speed);
	};

	const handleReset = () => {
		if (typeof window !== "undefined") {
			window.requestAnimationFrame(() => {
				setStyle((prevStyle) => ({
					...prevStyle,
					transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
				}));

				if (glare) {
					setGlareStyle((prevGlareStyle) => ({
						...prevGlareStyle,
						transform: "rotate(180deg) translate(-50%, -50%)",
						opacity: 0,
					}));
				}
			});
		}
	};

	const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
		updateElementPosition();
		setTransition();
		return onMouseEnter(e);
	};

	const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
		e.persist();
		if (updateCall.current !== null && typeof window !== "undefined") {
			window.cancelAnimationFrame(updateCall.current);
		}
		const coordinates = {
			clientX: e.clientX,
			clientY: e.clientY,
		};
		updateCall.current = requestAnimationFrame(() => update(coordinates));
		return onMouseMove(e);
	};

	const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
		setTransition();

		if (reset) {
			handleReset();
		}

		return onMouseLeave(e);
	};

	return (
		<div
			ref={element}
			style={{ ...style, ...styleState }}
			className={cx(
				"tilty-wrapper",
				className,
				css({
					position: "relative",
					w: "fit",
					overflow: "hidden",
					willChange: "transform",
				}),
			)}
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{glare && (
				<div
					className="tilty-glare-wrapper"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						overflow: "hidden",
						filter: "blur(80px)",
					}}
				>
					<div
						className="tilty-glare"
						style={{
							...glareStyle,
							...glareStyleState,
						}}
					/>
				</div>
			)}
			{children}
		</div>
	);
}
