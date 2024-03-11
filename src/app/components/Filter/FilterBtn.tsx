"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import Link from "next/link";

export function FilterBtn({
	type,
	value,
	multiple = false,
	disabled = false,
	children,
	variant = "button",
}: {
	type: string;
	value: string;
	variant?: "button" | "card";
	children: React.ReactNode;
	multiple?: boolean;
	disabled?: boolean;
}) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const active = searchParams.getAll(type).includes(value);

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			// console.log(params.getAll(name).includes(value), name, value);
			if (params.getAll(name).includes(value)) {
				params.delete(name, value);
			} else if (multiple) {
				params.append(name, value);
			} else {
				params.set(name, value);
			}
			return params.toString();
		},
		[searchParams, multiple]
	);

	const classNames = {
		button: `bg-white focus-visible:bg-white md:hover:bg-green focus-visible:outline-green focus-visible:text-black text-black border border-stroke md:hover:text-white text-body py-2 px-3 rounded-lg ${
			active ? "bg-green text-white" : ""
		}`,
		card: `focus-visible:bg-white focus-visible:outline-green md:hover:bg-green focus-visible:text-black md:hover:text-white group w-[160px] h-[80px] p-3 border-stroke border overflow-hidden flex-shrink-0 rounded-[8px] ${
			active ? "bg-green text-white" : "bg-white text-black"
		} relative`,
	};

	return (
		<Link
			aria-disabled={disabled}
			className={`${classNames[variant]} transition-colors duration-150 ease-out`}
			href={`${pathname}?${createQueryString(type, value)}`}
		>
			{children}
		</Link>
	);
}
