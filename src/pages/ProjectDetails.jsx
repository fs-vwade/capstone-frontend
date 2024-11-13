// src/pages/ProjectDetails.jsx

import { useParams } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import StatusCard from "../components/project-details/StatusCard";
import { useGetProjectInfoQuery } from "../../api/projectSlice";

const ProjectDetails = () => {
	const { id } = useParams();
	const { data: project, isLoading } = useGetProjectInfoQuery(id);

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
			{/* Project Header */}
			<div className="bg-gray-800 rounded-lg p-6 space-y-4">
				<h2 className="text-2xl font-bold text-white">{project.name}</h2>
				<p className="text-gray-400">{project.description}</p>
			</div>

			{/* Status and Enrollment Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="bg-gray-800 rounded-lg p-6 space-y-4">
					<h3 className="text-lg font-bold text-white">Project Status</h3>
					<StatusCard enrolled={project.enrolled} grade={project.grade} />
					<p className="text-gray-400">
						{project.type} - {project.exp} EXP
					</p>
					<ProgressBar value={project.grade} label="Score" />
				</div>

				<div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center space-y-4">
					<button
						className={`px-4 py-2 rounded-md text-sm font-semibold ${
							project.enrolled ? "bg-green-500" : "bg-blue-500"
						} text-white`}
					>
						{project.enrolled ? "Submit" : "Enroll"}
					</button>
					{/* Placeholder for comments or additional information */}
					<p className="text-gray-400 text-center">
						Enroll in the project to start contributing or submit your progress.
					</p>
				</div>
			</div>

			{/* Resource Links Section */}
			<div className="bg-gray-800 rounded-lg p-6 space-y-4">
				<h3 className="text-lg font-bold text-white">Resources</h3>
				<div className="space-y-2">
					{project.links.map((link, idx) => {
						const fileName = link.split("/").pop();
						return (
							<a
								key={idx}
								href={link}
								className="text-blue-400 hover:underline block"
							>
								{fileName}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
