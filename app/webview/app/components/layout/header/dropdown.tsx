"use client";

import { useLocation } from "@remix-run/react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";

import {
	Menu,
} from "lucide-react";

export type DropdownLinkItem = {
	href: string;
	label: string;
	icon: React.ReactNode;
};

type Props = {
	isAuthenticated?: boolean;
	authenticatedLinks: DropdownLinkItem[];
	unauthenticatedLinks: DropdownLinkItem[];
}

export const HeaderDropdown = ({ isAuthenticated, authenticatedLinks, unauthenticatedLinks }: Props) => {
    
	const location = useLocation();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Menu className={"w-4 h-4 text-primary"} />
				</Button>
			</DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={"flex flex-col gap-2 p-2"}>
				{isAuthenticated && authenticatedLinks.map((link) => (
					<DropdownMenuItem key={link.href} className={`w-full ${location.pathname.startsWith(link.href) && 'bg-primary text-secondary'}` } asChild>
						<a href={link.href}>
							{link.icon}
							{link.label}
						</a>
					</DropdownMenuItem>
				))}
				{!isAuthenticated && unauthenticatedLinks.map((link) => (
					<DropdownMenuItem key={link.href} className={`w-full ${location.pathname.startsWith(link.href) && 'bg-primary text-secondary'}` } asChild>
						<a href={link.href}>
							{link.icon}
							{link.label}
						</a>
					</DropdownMenuItem>
				))}
            </DropdownMenuContent>
		</DropdownMenu>
	);
};