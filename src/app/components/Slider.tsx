import type { FilterType } from "../types";
import Image from "next/image";
import { FilterBtn } from "./FilterBtn";

export function Slider({ filters }: { filters: FilterType[] }) {
	return (
		<div className={`flex gap-3 mb-6 overflow-scroll pl-6 sm:pl-0`}>
			{filters.map((filter) => (
				<Slide key={filter.id} {...filter} />
			))}
		</div>
	);
}

function Slide({ name, image_url, id }: FilterType) {
	return (
		<FilterBtn value={id} type="filter" variant="card" multiple>
			<Image
				className="absolute right-0 top-0 bottom-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out"
				src={image_url}
				alt={name}
				width={80}
				height={80}
			/>
			<p className="text-body">{name}</p>
		</FilterBtn>
	);
}
