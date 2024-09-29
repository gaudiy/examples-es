import { ClientProvider } from "@/client/client";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{/* <ClientProvider> */}
				{children}
				{/* </ClientProvider> */}
			</body>
		</html>
	);
}
