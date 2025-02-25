import { cn } from "~/lib/style";
import { HeaderDropdown, DropdownLinkItem } from "./dropdown";


type Props = {
	className?: string;
	isAuthenticated: boolean;
	authenticatedLinks: DropdownLinkItem[];
	unauthenticatedLinks: DropdownLinkItem[];
};

export const Header = ({ className, isAuthenticated, authenticatedLinks, unauthenticatedLinks }: Props) => {
	return (
		<header
			className={cn(
				"w-full h-20 flex justify-between items-center bg-primary text-secondary border-b border-primary",
				className,
			)}
		>
			<div className={"flex items-center gap-2 pl-4"}>
				<h2>Remix-TStack</h2>
			</div>
			<div className={"pr-8"}>
				<HeaderDropdown isAuthenticated={isAuthenticated} authenticatedLinks={authenticatedLinks} unauthenticatedLinks={unauthenticatedLinks}/>
			</div>
		</header>
	);
};