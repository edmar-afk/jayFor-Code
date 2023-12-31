import { useEffect, useState } from "react";
import Banner from "../components/homepage/Banner";
import Info from "../components/homepage/Info";
import Comments from "../components/homepage/Comments";
import Loader from "../components/Loader";
import ChatBot from "../components/ChatBot";
import Navbar from "../components/Navbar";
function Homepage() {
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 2000);
	}, []);

	if (loader) {
		return (
			<>
				<Loader />
			</>
		);
	}

	return (
		<>
			<main className="space-y-16 mb-2">
				<Navbar/>
				<Banner />
				<Info />
				<Comments />
				<ChatBot />
			</main>
		</>
	);
}

export default Homepage;
