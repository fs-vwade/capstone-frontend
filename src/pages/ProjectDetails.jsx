// src/pages/ProjectDetails.jsx

import { useParams } from "react-router-dom";
//import { ArrowLeft } from "lucide-react";
import ProgressBar from "../components/ProgressBar";
import { useGetProjectByIdQuery } from "../../api/projectSlice";

const ProjectDetails = () => {
	const { id } = useParams();
	const { data: project, isLoading } = useGetProjectByIdQuery(id);

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="max-w-7xl mx-auto px-4 py-6">
			<div className="bg-gray-800 rounded-lg p-6">
				<div className="flex justify-between items-start mb-6">
					<div>
						<h2 className="text-2xl font-bold mb-2">{project?.name}</h2>
						<span className="text-gray-400">{project?.type}</span>
					</div>
					<span
						className={`px-4 py-2 rounded-full text-sm ${
							project?.status === "completed"
								? "bg-green-500"
								: project?.status === "in-progress"
								? "bg-blue-500"
								: "bg-gray-500"
						}`}
					>
						{project?.status}
					</span>
				</div>
				<ProgressBar value={project?.exp || 0} max={100} label="Progress" />
			</div>
		</div>
	);
};

export default ProjectDetails;
