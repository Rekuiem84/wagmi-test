import { useReadContract, useWriteContract } from "wagmi";
import { useState } from "react";

const contractAddress = "0xb649FD8F6307B10973795C79155761AD94ED9DB4";
const contractABI = [
	"function count()",
	"function increment()",
	"function decrement()",
	"function incrementBy(uint value)",
	"function decrementBy(uint value)",
	"function reset()",
];

function App() {
	const { data: count } = useReadContract({
		address: contractAddress,
		abi: contractABI,
		functionName: "count",
	});

	const { write: increment } = useWriteContract({
		address: contractAddress,
		abi: contractABI,
		functionName: "increment",
	});

	const { write: decrement } = useWriteContract({
		address: contractAddress,
		abi: contractABI,
		functionName: "decrement",
	});

	const { write: incrementBy } = useWriteContract({
		address: contractAddress,
		abi: contractABI,
		functionName: "incrementBy",
	});

	const { write: decrementBy } = useWriteContract({
		address: contractAddress,
		abi: contractABI,
		functionName: "decrementBy",
	});

	const { write: reset } = useWriteContract({
		address: contractAddress,
		abi: contractABI,
		functionName: "reset",
	});

	const [value, setValue] = useState("");

	const handleIncrementBy = () => {
		incrementBy({ args: [value] });
	};

	const handleDecrementBy = () => {
		decrementBy({ args: [value] });
	};

	return (
		<div className="counter">
			<h2>Counter : {count?.toString()}</h2>
			<div className="update">
				<button onClick={() => increment()}>Increment</button>
				<button onClick={() => decrement()}>Decrement</button>
			</div>
			<div className="update-by">
				<button onClick={handleIncrementBy}>Increment By</button>
				<button onClick={handleDecrementBy}>Decrement By</button>
				<input
					type="number"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					min="0"
					pattern="[0-9]"
				/>
			</div>
			<button className="reset" onClick={() => reset()}>
				Reset
			</button>
		</div>
	);
}

export default App;
