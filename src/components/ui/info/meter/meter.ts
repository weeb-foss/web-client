import { Meter } from "@base-ui-components/react/meter";
import { styled } from "@/styled-system/jsx";
import {
	meterRoot,
	meterLabel,
	meterValue,
	meterTrack,
	meterIndicator,
} from "./meter.style";

export const MeterRoot = styled(Meter.Root, meterRoot);
export const MeterLabel = styled(Meter.Label, meterLabel);
export const MeterValue = styled(Meter.Value, meterValue);
export const MeterTrack = styled(Meter.Track, meterTrack);
export const MeterIndicator = styled(Meter.Indicator, meterIndicator);
