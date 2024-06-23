import { useEffect, useState, useRef } from "react";import Banner from "../components/homepage/Banner";import Info from "../components/homepage/Info";
import Comments from "../components/homepage/Comments";
import Loader from "../components/Loader";
import ChatBot from "../components/ChatBot";
function Homepage() {
	const [loader, setLoader] = useState(true);
	const commentsRef = useRef(null);
	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 1000);
	}, []);

	const scrollToComments = () => {
		if (commentsRef.current) {
			commentsRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

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
				<Banner onClickScroll={scrollToComments} />
				<Info />
				<div ref={commentsRef}>
					<Comments />
				</div>
				<ChatBot />
			</main>
		</>
	);
}

export default Homepage;
