import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";


function RootLayout() {
	return (
		<>
			
			<div className="mb-24">
				<Outlet />
			</div>
			
			<Footer />
		</>
	);
}

export default RootLayout;
