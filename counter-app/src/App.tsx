import { useReadContract } from "wagmi";

const contractAddress = "0xb649FD8F6307B10973795C79155761AD94ED9DB4";
const contractABI = [
	"function count()",
	"function increment()",
	"function decrement()",
	"function incrementBy(uint value)",
	"function decrementBy(uint value)",
	"function reset()",
];

const App = () => {
	const { data: count } = useReadContract({
		address: contractAddress,
		abi: contractABI,
		functionName: "count",
	});

	return (
		<div className="App">
			<h1>Counter: {count?.toString()}</h1>
		</div>
	);
};

export default App;
