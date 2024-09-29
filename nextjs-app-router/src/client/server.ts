import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { ElizaService } from "@/gen/connectrpc/eliza/v1/eliza_connect";

const transport = createConnectTransport({
	baseUrl: "https://demo.connectrpc.com",
});

export const client = createPromiseClient(ElizaService, transport);
