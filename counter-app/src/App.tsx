import { useReadContract } from "wagmi";
import { config } from "./wagmi";

function App() {
	const {
		data: balance,
		error,
		isPending,
	} = useReadContract({
		config,
		address: "0xb649FD8F6307B10973795C79155761AD94ED9DB4",
		args: ["0xb649FD8F6307B10973795C79155761AD94ED9DB4"],
	});
	console.log(balance);
	if (isPending) return <div>Loading...</div>;
	else if (error)
		return <div>Error: {error.shortMessage || error.message}</div>;
	else {
		return (
			<>
				<p>Balance: {balance?.toString()}</p>
			</>
		);
	}
}
export default App;
