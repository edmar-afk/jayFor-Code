/* eslint-disable react/prop-types */ /* eslint-disable react/no-unescaped-entities */ import {	faCalendarCheck,	faLanguage,	faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { franc } from "https://esm.sh/franc@6?bundle";
import languages from "language-names";

function CommentsCard(props) {
	const {id, name, rate, feedback, date, imageSrc, rateText, icon } = props;
	const [language, setLanguage] = useState("");
	const [translator, setTranslator] = useState(false);

	useEffect(() => {
		// Extract text from the feedback
		const text = feedback.replace(/"/g, ""); // Remove quotes if present
		// Predict language
		const predictedLanguage = franc(text);
		// Get full language name
		const fullLanguageName = languages[predictedLanguage];
		setLanguage(fullLanguageName || "English");

		const interval = setInterval(() => {
			setTranslator(() => !translator);
		}, 4000);

		return () => clearInterval(interval);
	}, [feedback, translator]);

	return (
		<>
			<div className="w-[360px] h-[370px] overflow-y-scroll relative bg-gray-900 mx-auto border-2 border-purple-950 border-l-4 border-l-purple-400  px-6 py-8 rounded-lg rounded-r-none mb-6 hover:border-purple-400 hover:cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-purple-400 duration-300">
				<div className="flex items-center mb-6 sticky top-[-33px] h-16 bg-gray-900">
					<img
						src={imageSrc}
						alt={rate}
						draggable="false"
						className="w-12 h-12 rounded-full mr-4 hover:scale-150 duration-500"
					/>
					<div>
						<p className="text-lg font-medium text-white capitalize">{name}</p>
						<div className="text-sm text-blue-300">
							<FontAwesomeIcon icon={icon} /> {rateText}
						</div>
					</div>
				</div>
				<p
					className="text-sm leading-relaxed text-white break-words"
					id="text">
					{feedback}
				</p>
				<p className="mb-12 mt-2 text-xs text-cyan-400"> - {language}</p>

				<div className="sticky bottom-[-40px] bg-gray-900 w-full h-14">
					<div className="flex justify-between items-center absolute bottom-4">
						<div>
							<p className="text-purple-400 hover:text-gray-700 mr-4">
								<FontAwesomeIcon
									icon={faCalendarCheck}
									className="mr-2"
								/>
								{date}
							</p>
						</div>
					</div>
					<div className="flex items-center absolute bottom-4 right-0">
						<div className="mr-3 relative duration-300">
							<div className={`${translator ? "scale-100" : "scale-0 translate-y-4 translate-x-4"} duration-${id}00`}>
								<div className="text-white bg-purple-400 absolute top-[-35px] right-[-10px] px-2 rounded-xl z-10">
									Translate
								</div>
								<div className="absolute right-0 top-[-30px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-purple-400"></div>
							</div>
							<FontAwesomeIcon
								icon={faLanguage}
								className="text-white text-2xl animate-pulse"
							/>
						</div>
						<p className="text-yellow-400 mr-4">
							{rate}
							<FontAwesomeIcon
								icon={faStar}
								className="ml-1"
							/>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default CommentsCard;
