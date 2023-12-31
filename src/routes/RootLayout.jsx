import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBot from "../components/chatBot";

function RootLayout() {
	return (
		<>
			<Navbar />
			<div className="mb-24">
				<Outlet />
			</div>
			<ChatBot/>
			<Footer />
		</>
	);
}

export default RootLayout;
