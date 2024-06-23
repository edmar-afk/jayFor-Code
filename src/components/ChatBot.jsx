/* eslint-disable react/no-unescaped-entities */ import { useState, useRef, useEffect } from "react";import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faFileArchive, faHeadset, faPaperPlane, faRobot, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import chatBot from "../assets/img/chatbot.svg";
import API_URL from "./data/api";
import TypeWriterEffect from "react-typewriter-effect";
function ChatBot() {
	const [viewChat, setViewChat] = useState(false);
	const [question, setQuestion] = useState("");
	const [questionsList, setQuestionsList] = useState([]);
	const chatboxRef = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (question.trim() === "") return; // Do nothing if input is empty

		const lowerCaseQuestion = question.toLowerCase(); // Convert the question to lowercase

		const newEntry = { question, response: "", loading: true };
		setQuestionsList([...questionsList, newEntry]);
		setQuestion(""); // Clear the input field

		try {
			const res = await axios.post(`${API_URL}/api/chatbot/`, { question: lowerCaseQuestion });
			const updatedEntry = { question, response: res.data.answer, loading: false };

			setTimeout(() => {
				setQuestionsList((prevQuestionsList) =>
					prevQuestionsList.map((entry, index) => (index === prevQuestionsList.length - 1 ? updatedEntry : entry))
				);
			}, 1500);
		} catch (error) {
			console.error("Error fetching response:", error);
			setQuestionsList((prevQuestionsList) =>
				prevQuestionsList.map((entry, index) =>
					index === prevQuestionsList.length - 1 ? { ...entry, loading: false } : entry
				)
			);
		}
	};

	useEffect(() => {
		if (chatboxRef.current) {
			chatboxRef.current.scrollTo({
				top: chatboxRef.current.scrollHeight,
				behavior: "smooth",
			});
		}
	}, [questionsList]);

	return (
		<>
			{viewChat && (
				<div
					onClick={() => setViewChat(!viewChat)}
					className="fixed top-0 transparent w-full h-full z-40">
					s
				</div>
			)}

			<div
				ref={chatboxRef}
				className={`fixed ${
					viewChat ? "scale-100" : "scale-0"
				} duration-300 bottom-24 md:bottom-28 overflow-y-scroll animate-fade right-2 md:right-16 bg-gray-300 rounded-l-xl h-[500px] w-full max-w-[360px] md:max-w-[400px] z-50`}>
				<div className="relative">
					<div className="flex flex-col sticky top-0 bg-purple-500 p-3 rounded-l-xl rounded-bl-none z-20">
						<div className="flex flex-row justify-between font-bold">
							<span>
								<FontAwesomeIcon
									icon={faHeadset}
									className="mr-3 scale-125"
								/>
								Lil Jay (Bot Assistant)
							</span>
							<p className="hover:cursor-pointer hover:bg-purple-400 hover:text-white rounded-full px-1.5 duration-300">
								<FontAwesomeIcon
									icon={faClose}
									className="hover:cursor-pointer"
									onClick={() => setViewChat(!viewChat)}
								/>
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center p-4">
						<img
							src={chatBot}
							alt="chatbot"
							draggable="false"
							className="w-[200px]"
						/>
						<p className="mt-4 text-gray-800 text-center">
							Dang, I'm Busy right now but you can contact my Lil junior though. HEEHHEEH
						</p>
						<div
							className="p-2 mt-4 bg-orange-800 items-center rounded-2xl text-orange-100 leading-none lg:rounded-full flex lg:inline-flex"
							role="alert">
							<span className="flex rounded-full bg-orange-500 uppercase px-2 py-1 text-sm font-bold mr-3">BETA</span>
							<span className="font-semibold mr-2 text-left flex-auto text-xs md:text-[15px]">
								My Lil Jay Junior still Learning from my greatness and attends to my lecture of awesomeness.
							</span>
						</div>
						{/* <p className="text-center mt-8 text-sm text-red-700 font-bold">Chatbot currently under maintenance.</p> */}
						<div className="mt-4 w-full">
							{questionsList.map((entry, index) => (
								<div
									key={index}
									className="mt-2 w-full relative">
									<div className="flex justify-end items-start gap-2.5 py-4 relative mb-0">
										<div className="flex flex-col w-fit leading-1.5 p-2 border-2 border-purple-700 rounded-s-xl rounded-br-xl bg-purple-700">
											<p className="text-sm font-normal text-white break-all text-right">{entry.question}</p>
											<p className="text-white text-xs absolute bottom-[-5px] right-16">
												{/* {formatTimestampToManilaTime(message.sent_time)} */}
											</p>
										</div>
										<div className="flex flex-col items-center">
											<FontAwesomeIcon
												icon={faUserAlt}
												className="text-sm text-purple-200 bg-purple-700 p-3 rounded-full"
											/>
											<span className="text-sm font-semibold text-purple-700 break-all text-right">You</span>
										</div>
									</div>

									{entry.loading ? (
										<div>
											<p>Typing...</p>
										</div>
									) : (
										<div className="flex items-start gap-2.5 py-4">
											<div className="flex flex-col items-center">
												<FontAwesomeIcon
													icon={faUserAlt}
													className="text-sm text-purple-700 bg-purple-300 p-3 rounded-full"
												/>
												<span className="text-[7px] sm:text-[9px] font-semibold text-purple-700 break-all text-right mt-1.5">
													Lil Jay
												</span>
											</div>
											<div className="flex flex-col w-fit leading-1.5 p-4 border-purple-600 rounded-e-xl rounded-es-xl bg-purple-900">
												<div className="flex items-center space-x-2">
													<span className="text-sm font-normal text-purple-400">
														{/* {formatTimestampToManilaTime(message.sent_time)} */}
													</span>
												</div>
												<p className="text-sm font-normal text-white">
													<TypeWriterEffect
														startDelay={100}
														text={entry.response}
														typeSpeed={50}
														hideCursorAfterText={true}
													/>
												</p>
											</div>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
					<div className="sticky bottom-0 mx-2 p-2 bg-gray-300 border-gray-200 border-t-2">
						<form
							className="flex flex-row items-center mt-4 mb-2"
							onSubmit={handleSubmit}>
							<FontAwesomeIcon
								icon={faFileArchive}
								className="px-3 text-purple-700 scale-110 hover:scale-125 duration-300 hover:text-purple-600 cursor-pointer"
							/>
							<input
								type="text"
								value={question}
								onChange={(e) => setQuestion(e.target.value)}
								placeholder="Type a message..."
								className="w-full h-fit border-none bg-gray-300 outline-none bg-transparent"
							/>
							<FontAwesomeIcon
								icon={faPaperPlane}
								className="px-3 text-purple-700 cursor-pointer hover:scale-125 hover:text-purple-800 duration-300"
								onClick={handleSubmit}
							/>
						</form>
					</div>
				</div>
			</div>
			<div
				onClick={() => setViewChat(!viewChat)}
				className="bg-purple-900 cursor-pointer z-50 p-3 sm:p-4 rounded-full text-white animate-bounce fixed bottom-5 sm:bottom-8 right-8">
				<button>
					<FontAwesomeIcon
						icon={faRobot}
						className="text-2xl sm:text-3xl"
					/>
				</button>
			</div>
		</>
	);
}

export default ChatBot;
