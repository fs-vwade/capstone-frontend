// src/pages/Projects.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { useGetProjectsQuery } from "../../api/projectSlice";
import { STUDENT_KEY } from "../keys";

const getToNext = () => {
	const studentInfo = localStorage.getItem(STUDENT_KEY);
	if (studentInfo) {
		const student = JSON.parse(studentInfo);
		return 80 * Math.pow(1.25, Math.floor(student.level || 0));
	}
	return 0;
};

const Projects = () => {
	const navigate = useNavigate();
	const { data: projects, isLoading, error } = useGetProjectsQuery();
	const [toNext, setToNext] = useState(0);

	useEffect(() => {
		const nextGoal = getToNext();

		setToNext(nextGoal);
	}, [projects]);

	if (isLoading)
		return (
			<div className="max-w-7xl mx-auto px-4 py-6">
				<p>Loading...</p>
			</div>
		);

	if (error)
		return (
			<div className="max-w-7xl mx-auto px-4 py-6">
				<p>Error loading projects</p>
			</div>
		);

	return (
		<div className="max-w-7xl mx-auto px-4 py-6">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-2xl font-bold">All Projects</h2>
				<div className="flex items-center space-x-4">
					<div className="relative">
						<input
							type="text"
							placeholder="Search projects..."
							className="bg-gray-800 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<svg
							className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects?.map((project) => (
					<ProjectCard
						key={project.id}
						project={project}
						toNext={toNext}
						onClick={() => navigate(`/projects/${project.id}`)}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
