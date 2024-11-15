import { useEffect, useState } from "react";
import { CheckCircle, XCircle, Clock } from "lucide-react"; // Icons for different statuses

const projectState = Object.freeze({
	NotEnrolled: "Not Enrolled",
	InProgress: "In Progress",
	Success: "Success",
	Fail: "Fail",
});

export default function StatusCard({ enrolled, grade }) {
	const [status, setStatus] = useState(projectState.NotEnrolled);

	useEffect(() => {
		const newStatus = enrolled
			? 70 <= grade
				? projectState.Success
				: 0 < grade
				? projectState.Fail
				: projectState.InProgress
			: projectState.NotEnrolled;
		setStatus(newStatus);
	}, [enrolled, grade]);

	// Define background color and icon based on the status
	const getStatusStyle = () => {
		switch (status) {
			case projectState.Success:
				return { bgColor: "bg-green-500", Icon: CheckCircle, text: "Success" };
			case projectState.Fail:
				return { bgColor: "bg-red-500", Icon: XCircle, text: "Fail" };
			case projectState.InProgress:
				return { bgColor: "bg-blue-500", Icon: Clock, text: "In Progress" };
			default:
				return { bgColor: "bg-gray-500", Icon: null, text: "Not Enrolled" };
		}
	};

	const { bgColor, Icon, text } = getStatusStyle();

	return (
		<div
			className={`flex flex-col items-center justify-center ${bgColor} text-white rounded-lg p-6 space-y-2`}
			//style={{ width: "150px", height: "150px" }}
		>
			{Icon && <Icon className="w-8 h-8" />}
			<div className="text-lg font-semibold">{text}</div>
			<div>
				<span className="text-3xl font-bold">{grade || 0}</span>
				<span>/ 100</span>
			</div>
		</div>
	);
}
