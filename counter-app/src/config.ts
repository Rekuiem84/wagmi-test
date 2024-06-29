import { http, createConfig } from "wagmi";
import { mainnet, polygonAmoy } from "wagmi/chains";

export const config = createConfig({
	chains: [mainnet, polygonAmoy],
	transports: {
		[mainnet.id]: http(),
		[polygonAmoy.id]: http(),
	},
});
