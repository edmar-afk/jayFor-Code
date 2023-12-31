import { useState } from "react";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
/* eslint-disable react/prop-types */
function Cards(props) {
	const { img, title, subTitle, stack, url } = props;
	const [hasUrl] = useState(url);

	return (
		<>
			<div className="w-full max-w-md rounded-lg shadow relative my-3 hover:scale-90 duration-300">
				<div className="w-full h-full absolute bg-gradient-to-r from-gray-900/90 to-slate-800/75 rounded-lg"></div>
				<div>
					<img
						className="p-1 rounded-xl h-52 sm:h-64"
						src={img}
						alt={title}
					/>
				</div>
				<div className="px-5 absolute top-20 sm:top-16">
					<a href="#">
						<h5 className="text-2xl sm:text-4xl font-semibold tracking-tight text-cyan-400">{title}</h5>
					</a>
					<div className="mt-2 mb-2">
						<p className="text-white text-sm sm:text-lg">{subTitle}</p>
					</div>
					<div className="mt-4 mb-2">
						{hasUrl ? (
							<a
								target="_blank"
								href={url}
								rel="noreferrer"
								className="bg-cyan-400 hover:bg-transparent hover:border-2 hover:border-cyan-400 hover:text-white duration-300 hover:scale-110 p-2 rounded-xl text-xs font-semibold px-4">
								Visit Demo Site{" "}
								<FontAwesomeIcon
									icon={faArrowAltCircleRight}
									
								/>
							</a>
						) : (
							<a
								href="#"
								rel="noreferrer"
								className="bg-red-400 hover:bg-transparent hover:border-2 hover:border-red-400 hover:text-white duration-300 hover:scale-110 p-2 rounded-xl text-xs font-semibold px-4">
								No link provided
							</a>
						)}
					</div>
				</div>
				<div className="absolute top-4 right-4">
					<div className="">
						<p className="text-white font-bold text-xs bg-blue-600 p-1 px-3 rounded-xl">{stack}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Cards;
