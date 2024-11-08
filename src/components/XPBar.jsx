import React, { useState, useEffect, useRef } from "react";

export default function XPBar({ value }) {
	const [progress, setProgress] = useState(0);
	const target = Math.min(Math.max(0, value), 100); // Clamp target between 0 and 100
	const rafId = useRef(null); // Ref to store requestAnimationFrame ID

	useEffect(() => {
		const animate = () => {
			const diff = target - progress;
			const updateProgress = progress + diff * 0.1; // Move 10% closer each frame
			if (progress < target) {
				console.debug(progress, target);
				setProgress(updateProgress);
				rafId.current = requestAnimationFrame(animate); // Request next frame
			} else {
				setProgress(target); // Snap to target if close enough
				cancelAnimationFrame(rafId.current);
			}
		};

		rafId.current = requestAnimationFrame(animate);

		// Cleanup function to cancel animation if component unmounts
		return () => cancelAnimationFrame(rafId.current);
	}, [target]);

	return <h1>{progress.toFixed(2)}</h1>; // Adjust precision as needed
}
