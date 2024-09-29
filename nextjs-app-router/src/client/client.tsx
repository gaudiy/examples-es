import { createConnectTransport } from "@connectrpc/connect-web";
import { TransportProvider } from "@connectrpc/connect-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC, ReactNode } from "react";

const transport = createConnectTransport({
	baseUrl: "https://demo.connectrpc.com",
});

const queryClient = new QueryClient();

export const ClientProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<TransportProvider transport={transport}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</TransportProvider>
	);
};
