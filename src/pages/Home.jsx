// src/pages/Home.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	useLoginMutation,
	useRegisterMutation,
	setCredentials,
} from "../../api/authSlice";

const Home = () => {
	const navigate = useNavigate();

	const [isLogin, setIsLogin] = useState(true);
	const authAction = isLogin ? "Login" : "Register";
	const altCopy = isLogin
		? "Need an account? Register here."
		: "Already registered? Login here.";

	// TODO -- if the user is already logged in, navigate to their profile page

	const [login, { error: loginError }] = useLoginMutation();
	const [register, { error: registerError }] = useRegisterMutation();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (username && password) {
			// Perform API call

			const authMethod = isLogin ? login : register;

			try {
				await authMethod({ username, password });
				navigate("/profile");
			} catch (e) {
				console.error(e);
			}
		}
	};

	return (
		<div
			name="login-page"
			className="min-h-screen bg-gray-900 flex items-center justify-center"
		>
			<div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
				<h1 className="text-3xl font-bold text-white mb-8 text-center">
					{isLogin ? "Login" : "Register"} to Intra 75
				</h1>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label className="block text-gray-300 mb-2">Username</label>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter username"
						/>
					</div>

					<div>
						<label className="block text-gray-300 mb-2">Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter password"
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
					>
						{isLogin ? "Login" : "Register"}
					</button>
				</form>

				<div className="mt-6 text-center">
					<button
						onClick={() => setIsLogin(!isLogin)}
						className="text-gray-400 hover:text-white"
					>
						{isLogin
							? "Don't have an account? Register"
							: "Already have an account? Login"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
