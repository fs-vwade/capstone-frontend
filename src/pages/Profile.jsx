import { useSelector } from "react-redux";
import ProgressBar from "../components/ProgressBar";

const Profile = () => {
	const user = useSelector((state) => state.auth.user);

	return (
		<div className="max-w-7xl mx-auto px-4 py-6">
			<div className="bg-gray-800 rounded-lg p-6">
				<div className="flex items-center mb-4">
					<div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
						{user?.username?.[0] || "U"}
					</div>
					<div className="ml-4">
						<h2 className="text-2xl font-bold">{user?.username}</h2>
						<p className="text-gray-400">Level {user?.level} Developer</p>
					</div>
				</div>
				<ProgressBar value={user?.exp || 0} max={100} label="Experience" />
			</div>
		</div>
	);
};

export default Profile;
