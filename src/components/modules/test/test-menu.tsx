import Arrow from "@/components/icons/arrow";
import NewPostModal from "@/components/shared/modals/new-post";
import { AvatarImage, AvatarRoot } from "@/components/ui/info/avatar/avatar";
import { Badge } from "@/components/ui/deco/badge/badge";
import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
	MenuArrow,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuSeparator,
} from "@/components/ui/info/menu/menu";
import {
	UserRoundIcon,
	PlusIcon,
	BellDotIcon,
	SparklesIcon,
	LogOutIcon,
	Trash2Icon,
	MonitorCogIcon,
} from "lucide-react";
import { Fragment, useRef, useState } from "react";

export default function TestMenu() {
	const menuTriggerRef = useRef<HTMLButtonElement>(null);
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<Fragment>
			<MenuRoot>
				<MenuTrigger ref={menuTriggerRef} render={<AvatarRoot />}>
					<AvatarImage
						src="/__mocked__/users/simxnet.png"
						alt="simxnet's avatar"
					/>
				</MenuTrigger>
				<MenuPortal>
					<MenuPositioner>
						<MenuPopup>
							<MenuArrow>
								<Arrow />
							</MenuArrow>
							<MenuGroup>
								<MenuGroupLabel>@simxnet</MenuGroupLabel>
								<MenuItem>
									<UserRoundIcon />
									Profile
								</MenuItem>
							</MenuGroup>
							<MenuSeparator />
							<MenuGroup>
								<MenuGroupLabel>Content</MenuGroupLabel>
								<MenuItem onClick={() => setDialogOpen(true)}>
									<PlusIcon />
									Create a post
								</MenuItem>
								<MenuItem>
									<MonitorCogIcon />
									Preferences
								</MenuItem>
							</MenuGroup>
							<MenuSeparator />
							<MenuGroup>
								<MenuGroupLabel>Extra</MenuGroupLabel>
								<MenuItem>
									<BellDotIcon />
									Notifications
								</MenuItem>
								<MenuItem
									_hover={{ bg: "yellow.subtle!", color: "yellow.fg!" }}
								>
									<SparklesIcon />
									Premium
									<Badge variant="soft" colorPalette={"yellow"}>
										NEW
									</Badge>
								</MenuItem>
							</MenuGroup>
							<MenuSeparator />
							<MenuGroup>
								<MenuGroupLabel>Risky</MenuGroupLabel>
								<MenuItem _hover={{ bg: "bg.error!", color: "fg.error!" }}>
									<LogOutIcon />
									Logout
								</MenuItem>
								<MenuItem _hover={{ bg: "bg.error!", color: "fg.error!" }}>
									<Trash2Icon />
									Delete profile
								</MenuItem>
							</MenuGroup>
						</MenuPopup>
					</MenuPositioner>
				</MenuPortal>
			</MenuRoot>
			<NewPostModal
				focusRef={menuTriggerRef}
				open={dialogOpen}
				onOpenChange={setDialogOpen}
			/>
		</Fragment>
	);
}
