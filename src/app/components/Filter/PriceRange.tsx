import { FilterBtn } from "./FilterBtn";
import type { PriceRangeType } from "../../types";
import { BASE_URL } from "../../lib/contants";
export function PriceRange({
	priceRange,
	filterdResturants,
}: {
	priceRange: string[];
	filterdResturants: any[];
}) {
	const availableFilters = [
		...new Set(filterdResturants.map((item) => item.price_range_id)),
	];
	return (
		<div className="hidden md:flex flex-col gap-y-2 items-start mb-8">
			<h3 className="text-body uppercase opacity-40 mb-2">Price Range</h3>
			<div className="flex gap-1 flex-wrap">
				{priceRange.map((id: string) => (
					<PriceRangeBtn
						avilable={availableFilters.includes(id)}
						key={id}
						id={id}
					/>
				))}
			</div>
		</div>
	);
}

export async function PriceRangeBtn({
	id,
	avilable,
}: {
	id: string;
	avilable: boolean;
}) {
	try {
		const data = await fetch(`${BASE_URL}/price-range/${id}`);
		const price: PriceRangeType = await data.json();
		return (
			<FilterBtn value={price.id} type={"price"} key={price.id} multiple>
				<span>{price.range}</span>
			</FilterBtn>
		);
	} catch (error) {
		console.error(error);
		return (
			<span className="text-body">Couldn´t fetch price range filter</span>
		);
	}
}
