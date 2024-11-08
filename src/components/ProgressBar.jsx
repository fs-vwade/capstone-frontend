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
		<Progress.Root
			value={progress}
			name="experimental-progressbar"
			className="h-2"
		>
			<Progress.Indicator
				style={{ width: `${progress}%` }}
				className="h-full bg-blue-900 transition-all duration-300 ease-in-out"
			></Progress.Indicator>
		</Progress.Root>
	);

	const otherBar = (
		<Progress.Progress
			value={progress}
			name="other-bar"
			className="w-full h-2 bg-gray-700 rounded-full overflow-hidden"
		>
			<div
				className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
				style={{ width: `${progress}%` }}
			/>
		</Progress.Progress>
	);

	return (
		<>
			<div name="progress-bar" className="w-full space-y-2">
				<div className="flex justify-between text-sm">
					<span>{label}</span>
					<span>{progress}%</span>
				</div>
				{testBar}
				{otherBar}
			</div>
		</>
	);
};

export default ProgressBar;
