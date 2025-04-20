import { IconWrapper } from "@/components/shared/misc/icon-wrapper";
import { Button } from "@/components/ui/form/button/button";
import { Heading } from "@/components/ui/info/heading/heading";
import { Box, Divider, Stack } from "@/styled-system/jsx";

export default function AppSidebar() {
	return (
		<Box w="3xs" h="fit" pos="sticky" top={16}>
			<Stack gap={5}>
				<Stack gap={1}>
					<Button
						w="full"
						variant="subtle"
						colorPalette={"bg"}
						justifyContent={"start"}
					>
						<IconWrapper
							name="home"
							color="brand.solid"
							fill="brand.solid/10"
						/>
						Your feed
					</Button>
					<Button
						w="full"
						variant="ghost"
						colorPalette={"bg"}
						justifyContent={"start"}
					>
						<IconWrapper name="users-round" color="fg.muted" />
						Friends
					</Button>
					<Button w="full" variant="subtle" colorPalette={"brand"}>
						<IconWrapper name="plus" />
						New post
					</Button>
				</Stack>
				<Divider borderColor={"border"} w="full" />
				<Stack gap={1}>
					<Heading size="lg">Follow suggestions</Heading>
				</Stack>
			</Stack>
		</Box>
	);
}
