import Arrow from "@/components/icons/arrow";
import NewPostModal from "@/components/shared/modals/new-post";
import { Button } from "@/components/ui/form/button/button";
import { Badge } from "@/components/ui/info/badge/badge";
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
	SlidersVerticalIcon,
	BellDotIcon,
	SparklesIcon,
	LogOutIcon,
	Trash2Icon,
} from "lucide-react";
import { Fragment, useRef, useState } from "react";

export default function TestMenu() {
	const menuTriggerRef = useRef<HTMLButtonElement>(null);
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<Fragment>
			<MenuRoot>
				<MenuTrigger
					ref={menuTriggerRef}
					render={<Button pill levitate variant="secondary" />}
				>
					Open test menu
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
									<SlidersVerticalIcon />
									Content preferences
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
									_hover={{ bg: "accent.gold/10!", color: "accent.gold!" }}
								>
									<SparklesIcon />
									Premium
									<Badge variant="soft" color="accent.gold">
										NEW
									</Badge>
								</MenuItem>
							</MenuGroup>
							<MenuSeparator />
							<MenuGroup>
								<MenuGroupLabel>Risky</MenuGroupLabel>
								<MenuItem
									_hover={{ bg: "accent.error/10!", color: "accent.error!" }}
								>
									<LogOutIcon />
									Logout
								</MenuItem>
								<MenuItem
									_hover={{ bg: "accent.error/10!", color: "accent.error!" }}
								>
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
