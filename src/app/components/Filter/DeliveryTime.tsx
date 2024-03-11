import { FilterBtn } from "./FilterBtn";
import type { ResturantType } from "../../types";
import { setDeliveryLabel } from "../../lib/utils";
export function DeliveryTime({
	deliveryTime,
	filterdResturants,
	...props
}: {
	deliveryTime: number[];
	filterdResturants: ResturantType[];
}) {
	return (
		<div className="flex flex-col gap-y-2 items-start mb-6 md:mb-8">
			<h3 className="text-body uppercase opacity-40 mb-2">
				Delivery Time
			</h3>
			<div className="flex gap-1 flex-wrap">
				{deliveryTime.map((filter: any) => (
					<FilterBtn
						type="delivery"
						value={filter.toString()}
						key={filter}
						multiple
					>
						<span>{setDeliveryLabel(filter)}</span>
					</FilterBtn>
				))}
			</div>
		</div>
	);
}
