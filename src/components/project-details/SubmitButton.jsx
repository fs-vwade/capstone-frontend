export default function SubmitButton({ enrolled }) {
	const doEnroll = () => {};
	const doSubmit = () => {};

	return (
		<div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center space-y-4">
			<button
				onSubmit={enrolled ? doSubmit : doEnroll}
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
