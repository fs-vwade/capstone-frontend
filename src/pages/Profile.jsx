import ProgressBar from "../components/ProgressBar";
import { useGetStudentQuery } from "../../api/studentSlice";
import XPBar from "../components/XPBar";

const Profile = () => {
	const { data: student, isLoading } = useGetStudentQuery();
	console.debug(student);

	const levelPercent =
		Math.floor((student?.level - Math.floor(student?.level)) * 10000) / 100;

	if (isLoading) return <div>Loading...</div>;

	return (
		<div name="profile-page" className="max-w-7xl mx-auto px-4 py-6">
			<div className="bg-gray-800 rounded-lg p-6">
				<div className="flex items-center mb-4">
					<div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
						{student?.username?.[0] || "U"}
					</div>
					<div className="ml-4">
						<h2 className="text-2xl font-bold">{student?.username}</h2>
						<p className="text-gray-400">
							Level {Math.floor(student?.level)} Developer
						</p>
					</div>
				</div>
				<XPBar value={levelPercent} label="Experience" />
			</div>
		</div>
	);
};

export default Profile;
