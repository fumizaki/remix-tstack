import { cn } from "~/lib/style";
import { Loader } from "lucide-react";

export const LoadingSpinner = ({ className }: { className?: string }) => {
	return (
		<div className={cn("flex items-center justify-center", className)}>
			<Loader className={"h-8 w-8 animate-spin"} />
		</div>
	);
};