import { Progress } from "@radix-ui/react-progress";

const ProgressBar = ({ value, max, label }) => {
	return (
		<div className="w-full space-y-2">
			<div className="flex justify-between text-sm">
				<span>{label}</span>
				<span>
					{value}/{max}
				</span>
			</div>
			<Progress
				value={(value / max) * 100}
				className="w-full h-2 bg-gray-700 rounded-full overflow-hidden"
			>
				<div
					className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
					style={{ width: `${(value / max) * 100}%` }}
				/>
			</Progress>
		</div>
	);
};

export default ProgressBar;
