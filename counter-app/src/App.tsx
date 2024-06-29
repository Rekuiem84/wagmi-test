// App.tsx
import { useReadContract, useWriteContract } from "wagmi";

const contractAddress = "0xb649FD8F6307B10973795C79155761AD94ED9DB4";

function App() {
	const { data: balance } = useReadContract({
		functionName: "balanceOf",
		address: contractAddress,
	});

	// const { send: incrementCounter } = useWriteContract({
	// 	functionName: "increment",
	// 	args: [contractAddress],
	// });

	// const { send: decrementCounter } = useWriteContract({
	// 	functionName: "decrement",
	// 	args: [contractAddress],
	// });

	// const { send: incrementByCounter } = useWriteContract({
	// 	functionName: "incrementBy",
	// 	args: [contractAddress],
	// });

	// const { send: decrementByCounter } = useWriteContract({
	// 	functionName: "decrementBy",
	// 	args: [contractAddress],
	// });

	return (
		<>
			<div>
				<div>Balance: {balance?.toString()}</div>
			</div>
		</>
	);
}

export default App;
