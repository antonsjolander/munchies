export interface ResturantType {
	id: string;
	name: string;
	rating: number;
	filter_ids: string[];
	image_url: string;
	delivery_time_minutes: number;
	price_range_id: string;
}

export interface FilterType {
	id: string;
	name: string;
	image_url: string;
}

export interface PriceRangeType {
	id: string;
	range: string;
}
