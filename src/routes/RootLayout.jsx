import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function RootLayout() {
	return (
		<>
			<Navbar />
			<div className="mb-24">
				<Outlet />
			</div>
			
			<Footer />
		</>
	);
}

export default RootLayout;
