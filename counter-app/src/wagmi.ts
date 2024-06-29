import { http, createConfig } from "wagmi";
import { type Chain } from "viem";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

// Définir la configuration de la chaîne Polygon Amoy
const polygonAmoy: Chain = {
	id: 80002,
	name: "Polygon Amoy Testnet",
	nativeCurrency: {
		name: "Matic",
		symbol: "MATIC",
		decimals: 18,
	},
	rpcUrls: {
		default: { http: ["https://rpc-amoy.polygon.technology/"] },
	},
	blockExplorers: {
		default: { name: "PolygonScan", url: "https://amoy.polygonscan.com/" },
	},
	testnet: true,
};

// Charger les variables d'environnement
const projectId = import.meta.env.VITE_WC_PROJECT_ID;

export const config = createConfig({
	chains: [polygonAmoy],
	connectors: [injected(), coinbaseWallet(), walletConnect({ projectId })],
	transports: {
		[polygonAmoy.id]: http(),
	},
});

declare module "wagmi" {
	interface Register {
		config: typeof config;
	}
}
