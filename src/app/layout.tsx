import type { Metadata } from "next";
import { Logo } from "./components/Logo";
import { StartScreen } from "./components/StartScreen";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://munchies-silk.vercel.app"),
	title: "Munchies",
	description: "Order tasty food right to you door step",
	openGraph: {
		title: "Munchies - Treat yourself.",
		description:
			"Find the best restaurants in your city and get it delivered to your place!",
		type: "website",
		url: "munchies-silk.vercel.app",
		images: "/og-image.jpg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<header className="mt-10 md:mt-14 mb-6 md:mb-12 px-6 2xl:px-0 max-w-[90rem] mx-auto">
					<Logo className="w-[167.17px] md:w-auto" />
				</header>
				<div className="max-w-[90rem] mx-auto">{children}</div>
				{/* TODO: only reander this if the user is on a mobile device */}
				<StartScreen />
			</body>
		</html>
	);
}
