import React from "react";
import * as Progress from "@radix-ui/react-progress";

export default function ExpBar({ value }) {
	const [progress, setProgress] = React.useState(0);
	const limit = Math.min(Math.max(0, value), 100);

	React.useEffect(() => {
		const fps = 1 / 60;
		const intervalId = setTimeout(() => {
			setProgress((acc) => (acc + limit * fps) / (1 + fps));
		}, fps * 1000);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<Progress.Root
			value={progress}
			className="w-full h-2 bg-gray-700 rounded-full overflow-hidden"
		>
			<Progress.Indicator
				style={{ width: `${progress}%` }}
				className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
			>
				EXP: {progress}%
			</Progress.Indicator>
		</Progress.Root>
	);
}
