import { useEffect, useState } from "react";import Banner from "./homepage/Banner";
import Info from "./homepage/Info";
import Comments from "./homepage/Comments";
import Loader from "../components/Loader";
import ChatBot from "../components/ChatBot";
function Homepage() {
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 1000);
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
				<Banner />
				<Info />
				<Comments />
				<ChatBot />
			</main>
		</>
	);
}

export default Homepage;
