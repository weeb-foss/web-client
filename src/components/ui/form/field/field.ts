import { Field as BaseField } from "@base-ui-components/react/field";
import { styled } from "@/styled-system/jsx";
import {
	fieldRoot,
	fieldLabel,
	fieldControl,
	fieldDescription,
	fieldError,
	fieldValidity,
} from "./field.style";

export const FieldRoot = styled(BaseField.Root, fieldRoot);
export const FieldLabel = styled(BaseField.Label, fieldLabel);
export const FieldControl = styled(BaseField.Control, fieldControl);
export const FieldDescription = styled(BaseField.Description, fieldDescription);
export const FieldError = styled(BaseField.Error, fieldError);
export const FieldValidity = styled(BaseField.Validity, fieldValidity);
