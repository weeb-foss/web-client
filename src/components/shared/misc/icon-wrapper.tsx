import type { WithStyles } from "@/lib/types/common";
import { css } from "@/styled-system/css";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";

interface IconWrapperProps {
	name: IconName;
}

export default function IconWrapper({
	name,
	...styles
}: WithStyles<IconWrapperProps>) {
	return <DynamicIcon name={name} className={css(styles)} />;
}
