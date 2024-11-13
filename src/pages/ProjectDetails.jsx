// src/pages/ProjectDetails.jsx

import { useParams } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useGetProjectInfoQuery } from "../../api/projectSlice";

const ProjectDetails = () => {
	const { id } = useParams();
	const { data: project, isLoading } = useGetProjectInfoQuery(id);

	if (isLoading) return <div>Loading...</div>;

	function subscribe() {}

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
							project?.enrolled ? "bg-green-500" : "bg-gray-500"
						}`}
					>
						{project?.enrolled ?? project?.grade}
						{project?.description}
					</span>
				</div>
				{<ProgressBar value={project?.grade} label="Score" />}
			</div>
			<div className="bg-gray-800 rounded-lg p-6">
				{<ProgressBar value={project?.grade} label="Score" />}
			</div>
		</div>
	);
};

export default ProjectDetails;
