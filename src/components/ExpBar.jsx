import React, { useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";

export default function ExpBar({ value }) {
	const [progress, setProgress] = useState(0);
	const limit = Math.min(Math.max(0, value), 100); // Ensures the value stays within 0 - 100

	useEffect(() => {
		// Define the duration over which you want to reach the target
		const duration = 2000; // in milliseconds (2 seconds for example)
		const fps = 60;
		const delta = duration / 1000 / fps;

		const intervalId = setInterval(() => {
			if (0.01 < Math.abs(progress - limit)) {
				// Calculate the new progress based on the current step
				const newProgress = (progress + limit * delta) / (1 + delta);
				setProgress(newProgress + Number.EPSILON);
			} else {
				// Stop updating if we've reached or surpassed the target value
				setProgress(limit);
				clearInterval(intervalId);
			}
		}, 1000 * delta);

		// Cleanup interval on unmount
		return () => clearInterval(intervalId);
	}, [limit]);

	return (
		<Progress.Root
			value={progress}
			className="w-full h-2 bg-gray-700 rounded-full overflow-hidden"
		>
			<Progress.Indicator
				style={{ width: `${progress}%` }}
				className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
			>
				EXP: {Math.floor(progress)}%
			</Progress.Indicator>
		</Progress.Root>
	);
}
