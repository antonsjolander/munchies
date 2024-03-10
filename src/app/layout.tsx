import type { Metadata } from "next";
import { Logo } from "./components/Logo";
import "./globals.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<header className="mt-14 mb-6 md:mb-12 px-6 2xl:px-0 max-w-[90rem] mx-auto">
					<Logo className="w-[167.17px] sm:w-auto" />
				</header>
				<div className="max-w-[90rem] mx-auto">{children}</div>
			</body>
		</html>
	);
}