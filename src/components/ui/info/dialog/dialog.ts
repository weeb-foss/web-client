import { Box, styled } from "@/styled-system/jsx";
import { Dialog } from "@base-ui-components/react/dialog";
import {
	dialogBackdrop,
	dialogPositioner,
	dialogPopup,
	dialogTitle,
	dialogDescription,
	dialogFooter,
	dialogBody,
	dialogClose,
	dialogFade,
} from "./dialog.style";

export const DialogRoot = Dialog.Root;
export const DialogTrigger = styled(Dialog.Trigger);
export const DialogPortal = Dialog.Portal;
export const DialogBackdrop = styled(Dialog.Backdrop, dialogBackdrop);
export const DialogPositioner = styled(Box, dialogPositioner);
export const DialogPopup = styled(Dialog.Popup, dialogPopup);
export const DialogTitle = styled(Dialog.Title, dialogTitle);
export const DialogDescription = styled(Dialog.Description, dialogDescription);
export const DialogFade = styled(Box, dialogFade);
export const DialogFooter = styled(Box, dialogFooter);
export const DialogBody = styled(Box, dialogBody);
export const DialogClose = styled(Dialog.Close, dialogClose);
