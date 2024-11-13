import React from "react";

const projectStatus = Object.freeze({
	NotEnrolled: 0,
	InProgress: 1,
	Success: 2,
	Fail: -1,
});

export default function ProjectStatus({ enrolled, grade }) {
	const [status, setStatus] = React.useState(projectStatus.NotEnrolled);

	React.useEffect(() => {
		const timeoutId = setTimeout(() => {
			setStatus(
				enrolled ??
					(70 <= grade
						? projectStatus.Success
						: 0 < grade && grade < 70
						? projectStatus.Fail
						: projectStatus.InProgress) ??
					ProjectStatus.NotEnrolled
			);
		}, 500);

		return clearTimeout(timeoutId);
	});

	const style = () => {
		switch (status) {
			case projectStatus.InProgress:
				return "bg-blue-500";
			case projectStatus.Success:
				return "bg-green-500";
			case projectStatus.Fail:
				return "bg-red-500";
			default:
				return "bg-grey-500";
		}
	};

	return (
		<div
			name="ProjectStats"
			className={`px-3 py-1 rounded-full text-sm ${style()}`}
		>
			<div></div>
		</div>
	);
}
