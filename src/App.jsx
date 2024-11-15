// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<div className="min-h-screen bg-gray-900 text-white">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/*"
						element={
							<>
								<Navbar />
								<Routes>
									<Route path="/profile" element={<Profile />} />
									<Route path="/projects" element={<Projects />} />
									<Route path="/projects/:id" element={<ProjectDetails />} />
								</Routes>
							</>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
