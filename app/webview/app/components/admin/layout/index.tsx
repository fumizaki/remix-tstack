import { cn } from "~/lib/style";
import { Header } from "~/components/layout/header";
import { Main } from "~/components/layout/main";
import { Coins, User2 } from "lucide-react";

export const Layout = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {

	const isAuthenticated = true;

	const buildAuthenticatedLinks = () => {
		return [
			{ href: "/dashboard", label: "Dashboard", icon: <Coins className="h-4 w-4 mr-2"/> },
		];
	}

	const buildUnauthenticatedLinks = () => {
		return [
			{ href: "/login", label: "Login", icon: <User2 className="h-4 w-4 mr-2"/> },
			{ href: "/register", label: "Register", icon: <Coins className="h-4 w-4 mr-2"/> },
		];
	}

	return (
		<div className={cn("flex flex-col h-screen", className)}>
			<Header className={"flex-none"} isAuthenticated={isAuthenticated} authenticatedLinks={buildAuthenticatedLinks()} unauthenticatedLinks={buildUnauthenticatedLinks()}/>
			<Main className={"grow"}>{children}</Main>
		</div>
	);
};