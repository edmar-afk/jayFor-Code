import { useState } from "react";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";/* eslint-disable react/prop-types */function Cards(props) {
	const { img, title, subTitle, stack, url } = props;
	const [hasUrl] = useState(url);

	return (
		<>
			<div className="w-full max-w-md rounded-lg relative my-6">
				<div>
					<img
						className="p-1 rounded-xl h-52 sm:h-64"
						src={img}
						alt={title}
					/>
				</div>
				<div className="px-2 mt-4">
					<div>
						<div className="w-44">
							<p className="text-white/70 font-bold text-xs bg-purple-800/70 p-0.5 px-3 mb-2 rounded-md">{stack}</p>
						</div>
					</div>
					<div>
						<h5 className="text-xl sm:text-2xl font-semibold tracking-tight text-white hover:text-cyan-400 duration-300">{title}</h5>
					</div>
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
								Visit Demo Site <FontAwesomeIcon icon={faArrowAltCircleRight} />
							</a>
						) : (
							<a
								rel="noreferrer"
								className="bg-gray-800 border-1 hover:cursor-not-allowed border-white text-white hover:text-white/40 hover:border-white/40  duration-300 p-2 rounded-xl text-xs font-semibold px-4">
								No Preview provided
							</a>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Cards;
