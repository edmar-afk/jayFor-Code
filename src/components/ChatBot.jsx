import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";
function ChatBot() {
	return (
		<div className="bg-purple-900 z-20 p-3 sm:p-4 rounded-full text-white animate-bounce fixed bottom-5 sm:bottom-8 right-8">
			<button
				data-tooltip-id="chatBot"
				data-tooltip-content="Chatbot not yet Available">
				<FontAwesomeIcon
					icon={faRobot}
					className="text-2xl sm:text-3xl"
				/>
				<Tooltip
					id="chatBot"
					style={{ backgroundColor: "rgb(37 99 235)", color: "#fff", fontWeight: "bold" }}
				/>
			</button>
		</div>
	);
}

export default ChatBot;
