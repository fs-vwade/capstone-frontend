import ProgressBar from "./ProgressBar";

const ProjectCard = ({ project, onClick, toNext }) => {
	const percentage = (100 * project.exp) / toNext;
	const getStatusColor = (status) => {
		switch (status) {
			case "completed":
				return "bg-green-500";
			case "in-progress":
				return "bg-blue-500";
			default:
				return "bg-gray-500";
		}
	};

	return (
		<div
			className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750"
			onClick={onClick}
		>
			<div className="flex justify-between items-start mb-4">
				<h3 className="text-xl font-bold">{project.name}</h3>
				<span
					className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
						project.status
					)}`}
				>
					{project.status}
				</span>
			</div>
			<p className="text-gray-400 mb-4">{project.description}</p>
			<p className="text-gray-400">{project.exp} EXP</p>
			<ProgressBar
				value={Math.min(project.exp, toNext)}
				max={toNext}
				label={`${percentage}% To Next`}
			/>
		</div>
	);
};

export default ProjectCard;
