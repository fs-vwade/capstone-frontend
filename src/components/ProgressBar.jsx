import { Progress } from "@radix-ui/react-progress";

const ProgressBar = ({ value, label }) => {
	return (
		<div className="w-full space-y-2">
			<div className="flex justify-between text-sm">
				<span>{label}</span>
				<span>{value}</span>
			</div>
			<Progress
				value={value}
				className="w-full h-2 bg-gray-700 rounded-full overflow-hidden"
			>
				<div
					className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
					style={{ width: `${value}%` }}
				/>
			</Progress>
		</div>
	);
};

export default ProgressBar;
