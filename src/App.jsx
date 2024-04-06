import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect } from "react";
import axios from "axios";
import API_URL from "./components/data/api";
function App() {
	useEffect(() => {
		const recordVisit = async () => {
			try {
				// Send a POST request to your Django backend API
				await axios.post(`${API_URL}/api/visits/`);
				console.log("Visit recorded successfully");
			} catch (error) {
				console.error("Error recording visit:", error);
			}
		};

		recordVisit();
	}, []); // Empty dependency array ensures that the effect runs only once when the component mounts
	return (
		<>
			<>
				<Navbar />

				<div className="mb-24 mt-8">
					<Outlet />
				</div>

				<Footer />
			</>
		</>
	);
}

export default App;
 