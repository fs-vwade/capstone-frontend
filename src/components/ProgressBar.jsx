import { Progress } from "@radix-ui/react-progress";

const ProgressBar = ({ value, label }) => {
	const state = Object.freeze({
		label: String(label),
		value: Math.min(Math.max(0, value), 100),
	});

	return (
		<div className="w-full space-y-2">
			<div className="flex justify-between text-sm">
				<span>{state.label}</span>
				<span>{state.value}</span>
			</div>
			<Progress
				value={state.value}
				className="w-full h-2 bg-gray-700 rounded-full overflow-hidden"
			>
				<div
					className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
					style={{ width: `${state.value}%` }}
				/>
			</Progress>
		</div>
	);
};

export default ProgressBar;
