import { useResignMutation } from "../../../api/projectSlice";

export default function ResignButton({ projectId }) {
	const [resign, { error: resignError }] = useResignMutation();

	const doAction = async (e) => {
		e.preventDefault();
		// will build grade system later
		const payload = { id: projectId };

		await resign(payload);
	};

	return (
		<form
			onSubmit={doAction}
			className="bg-gray-800 rounded-lg p-6 flex flex-col items-center space-y-4"
		>
			<button
				type="submit"
				className={`px-4 py-2 rounded-md text-sm font-semibold ${"bg-gray-500"} text-white`}
			>
				{"Resign"}
			</button>
			{/* Placeholder for comments or additional information */}
			<p className="text-gray-400 text-center">
				You can withdraw from the course if you enrolled by mistake.
			</p>
		</form>
	);
}
