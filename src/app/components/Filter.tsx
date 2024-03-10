import type { ResturantType, FilterType } from "../types";
import { Category } from "./Category";
import { DeliveryTime } from "./DeliveryTime";
import { PriceRange } from "./PriceRange";

export async function Filter({
	deliveryTime,
	filterdResturants,
	priceRange,
	filters,
	...props
}: {
	deliveryTime: number[];
	filterdResturants: ResturantType[];
	priceRange: string[];
	filters: FilterType[];
}) {
	return (
		<div className="flex flex-col gap-2 border-stroke sm:border rounded-lg sm:bg-white px-2 sm:px-6 2xl:px-6 py-0 md:py-6 ml-4 2xl:ml-0">
			<h2 className="hidden sm:block text-h1 mb-8">Filter</h2>
			<Category filters={filters} />
			<DeliveryTime
				deliveryTime={deliveryTime}
				filterdResturants={filterdResturants}
			/>
			<PriceRange
				priceRange={priceRange}
				filterdResturants={filterdResturants}
			/>
		</div>
	);
}
