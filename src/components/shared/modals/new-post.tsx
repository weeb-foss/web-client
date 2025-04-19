import { Button } from "@/components/ui/form/button/button";
import {
	FieldRoot,
	FieldLabel,
	FieldControl,
	FieldDescription,
} from "@/components/ui/form/field/field";
import { FieldsetRoot } from "@/components/ui/form/fieldset/fieldset";
import { Input, Textarea } from "@/components/ui/form/input/input";
import {
	DialogRoot,
	DialogPortal,
	DialogBackdrop,
	DialogPopup,
	DialogTitle,
	DialogDescription,
	DialogPositioner,
	DialogBody,
	DialogFooter,
	DialogClose,
	DialogFade,
} from "@/components/ui/info/dialog/dialog";
import type { WithDialogProps } from "@/lib/types/common";
import { XIcon } from "lucide-react";

export default function NewPostModal({
	focusRef,
	...dialogProps
}: WithDialogProps) {
	return (
		<DialogRoot {...dialogProps}>
			<DialogPortal>
				<DialogBackdrop />
				<DialogPositioner>
					<DialogPopup finalFocus={focusRef}>
						<DialogClose>
							<Button
								p={"2!"}
								pill
								variant="subtle"
								color="fg.muted"
								colorPalette={"bg"}
							>
								<XIcon />
							</Button>
						</DialogClose>
						<DialogTitle>Create a new post</DialogTitle>
						<DialogBody>
							<DialogDescription>
								Create a new post to share with your friends and followers. This
								is a test dialog and no post will be actually submitted.
							</DialogDescription>
							<FieldsetRoot w="full">
								<FieldRoot>
									<FieldLabel required>Title</FieldLabel>
									<FieldControl
										render={<Input />}
										placeholder="Give your post a meaningful title"
									/>
								</FieldRoot>
								<FieldRoot>
									<FieldLabel>Description</FieldLabel>
									<FieldControl
										render={<Textarea />}
										placeholder="Tell us MORE about your post, we'll love to hear more"
									/>
									<FieldDescription>
										You can @mention people and add #hashtags
									</FieldDescription>
								</FieldRoot>
								<FieldRoot>
									<FieldLabel>Description</FieldLabel>
									<FieldControl
										render={<Textarea />}
										placeholder="Tell us MORE about your post, we'll love to hear more"
									/>
									<FieldDescription>
										You can @mention people and add #hashtags
									</FieldDescription>
								</FieldRoot>
								<FieldRoot>
									<FieldLabel>Description</FieldLabel>
									<FieldControl
										render={<Textarea />}
										placeholder="Tell us MORE about your post, we'll love to hear more"
									/>
									<FieldDescription>
										You can @mention people and add #hashtags
									</FieldDescription>
								</FieldRoot>
								<FieldRoot>
									<FieldLabel>Description</FieldLabel>
									<FieldControl
										render={<Textarea />}
										placeholder="Tell us MORE about your post, we'll love to hear more"
									/>
									<FieldDescription>
										You can @mention people and add #hashtags
									</FieldDescription>
								</FieldRoot>
							</FieldsetRoot>
						</DialogBody>
						<DialogFade />
						<DialogFooter>
							<Button colorPalette={"bg"} variant="subtle">
								Save draft
							</Button>
							<Button colorPalette={"brand"}>Submit</Button>
						</DialogFooter>
					</DialogPopup>
				</DialogPositioner>
			</DialogPortal>
		</DialogRoot>
	);
}
