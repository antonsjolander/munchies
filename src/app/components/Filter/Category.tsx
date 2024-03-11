import { FilterBtn } from "./FilterBtn";
import type { FilterType } from "../../types";
export function Category({ filters }: { filters: FilterType[] }) {
	return (
		<div className="hidden md:flex flex-col gap-y-2.5 items-start mb-8">
			<h3 className="text-body uppercase opacity-40 mb-1.5">
				Food category
			</h3>
			{filters.map((filter: any) => (
				<FilterBtn
					value={filter.id}
					type={"filter"}
					key={filter.id}
					multiple
				>
					<span>{filter.name}</span>
				</FilterBtn>
			))}
		</div>
	);
}
