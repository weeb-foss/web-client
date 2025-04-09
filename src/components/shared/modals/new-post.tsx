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
} from "@/components/ui/info/dialog/dialog";
import { Heading } from "@/components/ui/info/heading/heading";
import { Span } from "@/components/ui/info/text/text";
import type { WithDialogProps } from "@/lib/types/common";
import { Stack, Center, VStack, Box, HStack } from "@/styled-system/jsx";
import { PlusIcon, ImagePlusIcon } from "lucide-react";

export default function NewPostModal({
	focusRef,
	...dialogProps
}: WithDialogProps) {
	return (
		<DialogRoot {...dialogProps}>
			<DialogPortal>
				<DialogBackdrop />
				<DialogPopup textAlign={"center"} finalFocus={focusRef}>
					<Center mb={2}>
						<Span
							p={0.5}
							bgGradient={"to-br"}
							gradientFrom={"brand.hover"}
							gradientTo={"brand.highlight"}
							rounded={"lg"}
							color="background"
						>
							<PlusIcon size={44} />
						</Span>
					</Center>
					<DialogTitle>Create a new post</DialogTitle>
					<DialogDescription>
						Create a new post to share with your friends and followers.
					</DialogDescription>
					<Stack>
						<Box
							w="full"
							border={"2px dashed {colors.border}"}
							color={{
								base: "text.subtle",
								_hover: "text",
							}}
							py={4}
							rounded="lg"
							cursor={"pointer"}
							_hover={{
								bg: "background.content",
							}}
						>
							<Center>
								<VStack>
									<ImagePlusIcon strokeWidth={1.5} size={36} />
									<Heading size="lg">Upload video or image</Heading>
								</VStack>
							</Center>
						</Box>
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
								<FieldDescription>You can @mention people</FieldDescription>
							</FieldRoot>
						</FieldsetRoot>
						<HStack justifyContent={"space-between"}>
							<Button variant="secondary">Nevermind</Button>
							<Button>Submit</Button>
						</HStack>
					</Stack>
				</DialogPopup>
			</DialogPortal>
		</DialogRoot>
	);
}
