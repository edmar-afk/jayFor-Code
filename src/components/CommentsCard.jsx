/* eslint-disable react/prop-types */ /* eslint-disable react/no-unescaped-entities */ import {	faCalendarCheck,	faEye,
	faLanguage,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { franc } from "https://esm.sh/franc@6?bundle";
import languages from "language-names";
import { Button, Dialog, DialogHeader, DialogBody, IconButton, Typography } from "@material-tailwind/react";

function CommentsCard(props) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen((cur) => !cur);
	const { name, rate, feedback, date, imageSrc, rateText, icon } = props;
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
			<div className="max-w-2xl w-full mx-auto z-20">
				<div className="flex flex-col">
					<div className="bg-gray-900 border border-purple-900 shadow-2xl rounded-3xl p-4 m-4">
						<div className="flex-none sm:flex">
							<div className="relative h-32 w-32 sm:mb-0 flex-initial mb-4">
								<img
									src={imageSrc}
									alt="img"
									className=" w-32 h-32 object-cover rounded-2xl"
								/>
								<a
									href="#"
									className="absolute -right-2 bottom-2 -ml-3  text-white p-1 text-xs bg-purple-600 hover:bg-purple-800 font-medium tracking-wider w-78 h-8 flex rounded-full transition ease-in duration-300">
									<FontAwesomeIcon
										icon={icon}
										className="w-6 h-6"
									/>
								</a>
							</div>
							<div className="flex-auto sm:ml-5 justify-evenly">
								<div className="flex items-center justify-between sm:mt-2">
									<div className="flex items-center">
										<div className="flex flex-col">
											<div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">{name}</div>
											<div className="flex-auto text-gray-400 my-1">
												<span className="mr-3 ">{rateText}</span>
												<span className="mr-3 border-r border-gray-600  max-h-0"></span>
												<span className="mr-3">
													{rate}.0{" "}
													<FontAwesomeIcon
														icon={faStar}
														className="text-yellow-400"
													/>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-row items-center">
									<div className="flex items-center text-yellow-400">
										{Array(Math.floor(rate))
											.fill(null)
											.map((_, index) => (
												<FontAwesomeIcon
													key={index}
													icon={faStar}
												/>
											))}
									</div>
								</div>
								<div className="flex pt-2  text-sm text-gray-400">
									<div className="flex-1 inline-flex items-center">
										<FontAwesomeIcon
											icon={faCalendarCheck}
											className="text-lg mr-2"
										/>
										<p className="text-md">{date}</p>
									</div>

									<Button
										onClick={handleOpen}
										className="flex-no-shrink items-center bg-purple-600 hover:bg-purple-800 px-5 ml-4 py-2 sm:text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-purple-300 hover:border-purple-500 text-white rounded-full transition ease-in duration-300">
										<FontAwesomeIcon icon={faEye} /> Feedback
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			
			<Dialog
				className="p-4 w-fit bg-gray-800 mx-auto"
				size="sm"
				open={open}
				handler={handleOpen}>
				<DialogHeader className="justify-between">
					<img
						src={imageSrc}
						alt="exclamation"
						className="w-24 h-24 rounded-full"
					/>
					<IconButton
						color="gray"
						size="sm"
						variant="text"
						onClick={handleOpen}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
							className="h-5 w-5 font-bold text-red-400">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</IconButton>
				</DialogHeader>
				<DialogBody className="overflow-y-scroll">
					<Typography className="mb-1 font-bold text-purple-200">{name}'s Feedback</Typography>
					<Typography
						variant="paragraph"
						className="font-normal italic text-white max-w-lg">
						"{feedback}"
					</Typography>
					<div className="flex mt-4 text-purple-300">
						<FontAwesomeIcon
							icon={faLanguage}
							className="text-sm sm:text-lg mr-2"
						/>
						<p className="text-xs sm:text-md">{language}</p>
					</div>
					<div>
						<div className="flex flex-col md:flex-row gap-2 mt-4">
							<Button
								color="gray"
								onClick={handleOpen}
								className="px-4 py-1.5 bg-purple-400">
								Close
							</Button>
						</div>
					</div>
				</DialogBody>
			</Dialog>
		</>
	);
}

export default CommentsCard;
