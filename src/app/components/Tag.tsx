export function Tag({
	label,
	open,
	variant,
}: {
	label: string;
	open?: boolean;
	variant: "indicator" | "label";
}) {
	const className = {
		indicator: "",
		label: "",
	};
	return (
		<div
			className={`rounded-full flex text-body items-center gap-1 border border-stroke py-2 px-3 ${className[variant]}`}
		>
			{variant === "indicator" && (
				<i
					className={`block w-2 aspect-square rounded-full ${
						open ? "bg-green" : "bg-black"
					}`}
				></i>
			)}
			<span>{label}</span>
		</div>
	);
}
