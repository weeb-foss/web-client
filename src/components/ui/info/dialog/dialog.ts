import { styled } from "@/styled-system/jsx";
import { Dialog } from "@base-ui-components/react/dialog";
import { dialogBackdrop, dialogPopup, dialogDescription } from "./dialog.style";
import { heading } from "../heading/heading.style";

export const DialogRoot = Dialog.Root;
export const DialogTrigger = styled(Dialog.Trigger);
export const DialogPortal = Dialog.Portal;
export const DialogBackdrop = styled(Dialog.Backdrop, dialogBackdrop);
export const DialogPopup = styled(Dialog.Popup, dialogPopup);
export const DialogTitle = styled(Dialog.Title, heading);
export const DialogDescription = styled(Dialog.Description, dialogDescription);
export const DialogClose = styled(Dialog.Close);
