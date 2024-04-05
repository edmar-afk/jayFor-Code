/* eslint-disable react/no-unescaped-entities */ import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { faClose, faCommentDots, faHeadset, faPaperPlane, faRobot } from "@fortawesome/free-solid-svg-icons";
import chatBot from "../assets/img/chatbot.svg";
import { useState } from "react";
function ChatBot() {
	const [viewChat, setViewChat] = useState(false);
	return (
		<>
			<div
				className={`fixed ${
					viewChat ? "scale-100" : "scale-0 translate-y-64 translate-x-44"
				} duration-300 bottom-24 md:bottom-28 overflow-y-scroll animate-fade right-2 md:right-16 bg-gray-300 rounded-l-xl h-[500px] w-full max-w-[360px] md:max-w-[400px] z-50`}>
				<div className="relative">
					<div className="flex flex-col sticky top-0 bg-purple-500 p-3 rounded-l-xl rounded-bl-none">
						<div className="flex flex-row justify-between font-bold">
							<span>
								<FontAwesomeIcon
									icon={faHeadset}
									className="mr-3 scale-125"
								/>
								Lil Jay (Bot Assistant)
							</span>
							<p className="hover:cursor-pointer hover:bg-red-400 hover:text-white rounded-full px-1.5 duration-300">
								<FontAwesomeIcon
									icon={faClose}
									className="hover:cursor-pointer"
									onClick={() => setViewChat(!viewChat)}
								/>
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center p-12">
						<img
							src={chatBot}
							alt="chatbot"
							draggable="false"
							className="w-[200px]"
						/>
						<p className="mt-4 text-gray-800 text-center">
							Dang, I'm Busy right now but you can contact my Lil junior though. HEEHHEEH
						</p>

						<p className="text-center mt-8 text-sm text-red-700 font-bold">Chatbot currently under maintenance.</p>
					</div>

					<div className="flex flex-row sticky bottom-0 mx-2 p-2 items-center bg-gray-300 border-gray-400 border-t-2">
						<FontAwesomeIcon
							icon={faCommentDots}
							className="px-3 text-purple-700 scale-125"
						/>
						<input
							type="text"
							name=""
							id=""
							placeholder="Type a message..."
							className="rounded-xl w-full border-none bg-gray-300 focus:ring-gray-300"
						/>
						<FontAwesomeIcon
							icon={faPaperPlane}
							className="px-3 text-purple-700 cursor-pointer hover:scale-150 hover:text-green-800 duration-300"
						/>
					</div>
				</div>
			</div>

			<div className="bg-purple-900 z-50 p-3 sm:p-4 rounded-full text-white animate-bounce fixed bottom-5 sm:bottom-8 right-8">
				<button onClick={() => setViewChat(!viewChat)}>
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
