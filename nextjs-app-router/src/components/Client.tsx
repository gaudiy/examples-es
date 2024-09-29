"use client";

import { type FC } from "react";
import { useQuery } from "@connectrpc/connect-query";
import { ElizaService } from "@/gen/connectrpc/eliza/v1/eliza_connect";

export const Client: FC = () => {
	// const { data } = useQuery(ElizaService);

	return (
		<>
			<h2>Client</h2>
			{/* <code>{JSON.stringify(response)}</code> */}
		</>
	);
};
