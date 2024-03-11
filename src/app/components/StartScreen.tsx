"use client";
import { Logo } from "./Logo";
import { use, useState } from "react";
export function StartScreen() {
	const [show, setShow] = useState(true);

	return (
		show && (
			<div className="fixed inset-0 flex md:hidden  flex-col p-5 items-start justify-between h-svh text-body bg-green text-white">
				<Logo fill={"#fff"} className="mt-14 w-[167.17px] md:w-auto" />
				<div className="max-w-60">
					<h1
						// maybe im in the wrong here. but feels like the font is squashed on the y-axis ¯\_(ツ)_/¯
						className="text-[48px] scale-y-[0.75] leading-[48px] tracking-[-1px] font-[700]"
					>
						Treat yourself.
					</h1>
					<p className="text-[14px] leading-[21px]">
						Find the best restaurants in your city and get it
						delivered to your place!
					</p>
				</div>
				<button
					onClick={() => setShow(false)}
					className="w-full font-[700] border rounded-lg border-white py-5"
				>
					Continue
				</button>
			</div>
		)
	);
}
