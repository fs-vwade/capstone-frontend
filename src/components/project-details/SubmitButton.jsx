import {
	useEnrollMutation,
	useSubmitMutation,
} from "../../../api/projectSlice";

export default function SubmitButton({ enrolled }) {
	const [enroll, { error: enrollError }] = useEnrollMutation();
	const [submit, { error: submitError }] = useSubmitMutation();

	const doEnroll = (e) => {};
	const doSubmit = (e) => {
		const action = enrolled ? submit : enroll;

		action();
	};

	return (
		<div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center space-y-4">
			<button
				onSubmit={doSubmit}
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
		</div>
	);
}
