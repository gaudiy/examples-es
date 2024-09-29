import { type FC } from "react";
import { client } from "@/client/server";

export const Server: FC = async () => {
	const request = { sentence: "hi (from the server)" };
	const response = await client.say(request);

	return (
		<>
			<h2>Server</h2>
			<code>{JSON.stringify(response)}</code>
		</>
	);
};
