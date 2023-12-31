import Cards from "../components/Cards";
import Loader from "../components/Loader";
import ChatBot from "../components/ChatBot";
import { works } from "../components/data/Links";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
function Works() {
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
			<Navbar/>
			<div className="p-3 sm:p-12 mt-32">
				<h1 className="text-white font-bold text-xl md:text-3xl xl:text-4xl text-center">Works of Art</h1>
				<p className="mt-4 text-gray-300 italic font-semibold text-center mb-20">
					I turn WORK into MASTERPIECES and PROJECTS into PUNdemonium
				</p>
				<p className="text-white text-sm sm:text-xl font-bold">── Contact me for source code.</p>
				<div className="flex flex-row justify-evenly flex-wrap">
					{works.map((items) => {
						const { id, imgUrl, title, subTitle, stack, link } = items;
						return (
							<Cards
								key={id}
								img={imgUrl}
								title={title}
								subTitle={subTitle}
								stack={stack}
								url={link}
							/>
						);
					})}
				</div>
			</div>
			<ChatBot />
		</>
	);
}

export default Works;
