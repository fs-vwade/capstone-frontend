import React from "react";

const projectState = Object.freeze({
	NotEnrolled: "Not Enrolled",
	InProgress: 1,
	Success: 2,
	Fail: -1,
});

export default function StatusCard({ enrolled, grade }) {
	const [status, setStatus] = React.useState(projectState.NotEnrolled);

	React.useEffect(() => {
		const timeoutId = setTimeout(() => {
			enrolled &&
				setStatus(
					70 <= grade
						? projectState.Success
						: 0 < grade && grade < 70
						? projectState.Fail
						: projectState.InProgress
				);
		}, 500);

		return clearTimeout(timeoutId);
	});

	const style = () => {
		switch (status) {
			case projectState.InProgress:
				return "bg-blue-500";
			case projectState.Success:
				return "bg-green-500";
			case projectState.Fail:
				return "bg-red-500";
			default:
				return "bg-gray-500";
		}
	};

	return (
		<div
			name="ProjectStatusCard"
			className={`px-3 py-1 rounded-full text-sm ${style()}`}
		>
			<div>{enrolled ? "enrolled" : "not enrolled"}</div>
			<div>Grade: {grade} / 100</div>
			<div>Status: {status}</div>
		</div>
	);
}
