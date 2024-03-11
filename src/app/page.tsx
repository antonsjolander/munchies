import { Filter } from "./components/Filter";
import { Grid } from "./components/Grid";
import { Slider } from "./components/Slider";
import { BASE_URL } from "./lib/contants";
import type { ResturantType, FilterType } from "./types";

export default async function Home({
	searchParams,
	...props
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	try {
		// Fetch data from external API
		const [restaurantResponse, filterResponse] = await Promise.all([
			fetch(BASE_URL + "restaurants").then((res) => res.json()),
			fetch(BASE_URL + "filter").then((res) => res.json()),
		]);

		const { filters }: { filters: FilterType[] } = filterResponse;
		const { restaurants }: { restaurants: ResturantType[] } =
			restaurantResponse;

		const { delivery, filter, price } = searchParams;

		// Filter function
		const handleMultipleFilter = (
			target: string | string[] | undefined,
			criteria: string | string[]
		): boolean => {
			if (target === criteria) return true;
			if (!target || !criteria) return false;

			if (Array.isArray(target)) {
				return target.some((item) =>
					Array.isArray(criteria)
						? criteria.includes(item)
						: criteria === item
				);
			} else {
				return Array.isArray(criteria)
					? criteria.includes(target)
					: false;
			}
		};

		// Filter the restaurants
		const filteredArray = restaurants
			.filter(
				({ filter_ids }) =>
					handleMultipleFilter(filter, filter_ids) || !filter
			)
			.filter(
				({ delivery_time_minutes }) =>
					handleMultipleFilter(
						delivery,
						delivery_time_minutes.toString()
					) || !delivery
			)
			.filter(
				({ price_range_id }) =>
					handleMultipleFilter(price, price_range_id) || !price
			)
			.sort((a, b) => a.delivery_time_minutes - b.delivery_time_minutes);

		// Get unique values for delivery time
		const deliveryTime = [
			...new Set(
				restaurants.map((item) => item.delivery_time_minutes).sort()
			),
		];

		// Get unique values for price range
		const priceRange = [
			...new Set(
				restaurants
					.map((item) => item.price_range_id)
					.sort((a, b) => a.length - b.length)
			),
		];

		return (
			<main className="grid grid-cols-1 md:grid-cols-[239px_minmax(320px,_1fr)] md:gap-4">
				<Filter
					filters={filters}
					deliveryTime={deliveryTime}
					priceRange={priceRange}
					filterdResturants={filteredArray}
				/>
				<div>
					<Slider filters={filters} />
					<Grid restaurants={filteredArray} />
				</div>
			</main>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
		return <div>Error fetching data</div>;
	}
}
