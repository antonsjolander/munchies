import type { ResturantType } from "../types";

import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Arrow";
import { Tag } from "./Tag";
import { setDeliveryLabel } from "../lib/utils";

export async function Card({
	id,
	name,
	image_url,
	delivery_time_minutes,
}: ResturantType) {
	const data = await fetch(
		`https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/open/${id}`
	);
	const { is_open } = await data.json();

	return (
		<Link
			href={``}
			// className="w-[327px] flex flex-col justify-between relative overflow-hidden col-span-4 h-[202px] bg-white flex-shrink-0 p-4 border rounded-lg border-stroke"
			className={`aspect-[327/202] ${
				is_open ? "order-1 open" : "order-2 pointer-events-none"
			} group flex flex-col justify-between relative overflow-hidden bg-white flex-shrink-0 p-4 border rounded-lg border-stroke hover:border-green transition-colors duration-150 ease-out`}
		>
			<div className={`flex gap-1`}>
				<Tag
					variant="indicator"
					label={is_open ? "Open" : "Closed"}
					open={is_open}
				></Tag>
				<Tag
					variant="label"
					label={setDeliveryLabel(delivery_time_minutes)}
				></Tag>
			</div>
			<Image
				className="absolute -right-1 -top-1 card-image group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out group-[.open]:opacity-100 opacity-20"
				src={image_url}
				alt={name}
				width={140}
				height={140}
			/>

			<div className="flex justify-between items-center group-[.open]:opacity-100 opacity-20">
				<h3 className="text-h1">{name}</h3>
				<i className="arrow rounded-full w-[32px] flex overflow-hidden justify-center items-center aspect-square bg-green group-hover:scale-105 transition-transform duration-300 ease-in-out">
					<Arrow className="group-hover:translate-x-[200%] duration-200 ease-out" />
					<Arrow className="absolute translate-x-[-220%]  group-hover:translate-x-0 duration-200 ease-out" />
				</i>
			</div>
			{!is_open && (
				<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black border bg-offwhite border-stroke text-body py-2 px-3 rounded-lg">
					Opens tomorrow at 12 pm
				</span>
			)}
		</Link>
	);
}
