import {
	useEnrollMutation,
	useSubmitMutation,
} from "../../../api/projectSlice";

export default function SubmitButton({ enrolled, id }) {
	const [enroll, { error: enrollError }] = useEnrollMutation();
	const [submit, { error: submitError }] = useSubmitMutation();

	const doAction = async (e) => {
		e.preventDefault();
		const action = enrolled ? submit : enroll;

		console.debug(action, id);
		await action(id);
	};

	return (
		<form
			onSubmit={doAction}
			className="bg-gray-800 rounded-lg p-6 flex flex-col items-center space-y-4"
		>
			<button
				type="submit"
				className={`px-4 py-2 rounded-md text-sm font-semibold ${
					enrolled ? "bg-green-500" : "bg-blue-500"
				} text-white`}
			>
				{enrolled ? "Submit" : "Enroll"}
			</button>
			{/* Placeholder for comments or additional information */}
			<p className="text-gray-400 text-center">
				Enroll in the project to start contributing or submit your progress.
			</p>
		</form>
	);
}
