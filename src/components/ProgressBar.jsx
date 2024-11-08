//import { Progress } from "@radix-ui/react-progress";
import React from "react";
import * as Progress from "@radix-ui/react-progress";

const ProgressBar = ({ value, label }) => {
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		const timer = setTimeout(
			() => setProgress(Math.min(Math.max(0, value), 100)),
			500
		);
		return () => clearTimeout(timer);
	}, []);

	const testBar = (
		<Progress.Root value={progress}>
			<Progress.Indicator
				style={{ width: `${progress}%` }}
			></Progress.Indicator>
		</Progress.Root>
	);

	return (
		<>
			<div name="progress-bar" className="w-full space-y-2">
				<div className="flex justify-between text-sm">
					<span>{label}</span>
					<span>{progress}%</span>
				</div>
				{testBar}
				<Progress.Progress
					value={progress}
					className="w-full h-2 bg-gray-700 rounded-full overflow-hidden"
				>
					<div
						className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
						style={{ width: `${progress}%` }}
					/>
				</Progress.Progress>
			</div>
		</>
	);
};

export default ProgressBar;
