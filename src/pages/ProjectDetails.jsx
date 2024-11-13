// src/pages/ProjectDetails.jsx

import { useParams } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useGetProjectInfoQuery } from "../../api/projectSlice";
import StatusCard from "../components/project-details/StatusCard";

const ProjectDetails = () => {
	const { id } = useParams();
	const { data: project, isLoading } = useGetProjectInfoQuery(id);

	if (isLoading) return <div>Loading...</div>;

	function subscribe() {}

	return (
		<div className="max-w-7xl mx-auto px-4 py-6">
			<div className="bg-gray-800 rounded-lg p-6">
				<h2 className="text-2xl font-bold mb-2">{project.name}</h2>
				<p className="text-gray-400">{project.description}</p>
				<span
					className={`px-4 py-2 rounded-full text-sm ${
						project.enrolled ? "bg-green-500" : "bg-gray-500"
					}`}
				>
					{project.enrolled ? "Enrolled" : "Not Enrolled"}
				</span>
				<ProgressBar value={project.exp} label="Experience" />
				<div className="mt-4">
					{project.links.map((link, idx) => (
						<div key={idx}>
							<a href={link} className="text-blue-400 hover:underline">
								{link.split("/").pop()}
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
