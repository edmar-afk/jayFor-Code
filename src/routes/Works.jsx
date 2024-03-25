/* eslint-disable react/no-unescaped-entities */import Cards from "../components/Cards";
import Loader from "../components/Loader";
import ChatBot from "../components/ChatBot";
import { works } from "../components/data/Links";
import { useState, useEffect } from "react";
import Gradient from "../components/Gradient";
function Works() {
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
			<Gradient />
			<div className="p-3 sm:p-12 mt-32">
				<div className="lg:w-2/3 text-center mx-auto mb-24">
					<h1 className="text-purple-800 font-bold text-3xl md:text-65xl xl:text-6xl">
						CraftCode Creations
						<br />
						<span className="text-white">Hobbies Meet Innovation.</span>
					</h1>
					<p className="mt-8 text-gray-300 italic font-semibold">
						I'm not just coding, I'm crafting! Dive into a realm where hobbies intertwine with innovation. In here, I
						sculpt digital experiences that turn your leisure into a masterpiece.
					</p>
				</div>
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
