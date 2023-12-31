/* eslint-disable react/no-unescaped-entities */ import {	faCalendarCheck,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CommentsCard(props) {
	// eslint-disable-next-line react/prop-types
	const { imgUrl, name, rate, feedback, satisfaction, date, icon } = props;
	return (
		<>
			<div className="w-[350px] relative bg-slate-900 mx-auto border border-cyan-400 px-6 py-8 rounded-lg mb-6 hover:border-blue-400 hover:scale-90 hover:shadow-2xl hover:shadow-blue-400 duration-300">
				<div className="flex items-center mb-6">
					<img
						src={imgUrl}
						alt="Avatar"
						className="w-12 h-12 rounded-full mr-4"
					/>
					<div>
						<div className="text-lg font-medium text-white">{name}</div>
						<div className="text-sm text-blue-300">
							<FontAwesomeIcon icon={icon} /> {satisfaction}
						</div>
					</div>
				</div>
				<p className="text-sm leading-relaxed mb-6 text-white break-words">{feedback}</p>

				<div className="flex justify-between items-center absolute bottom-4">
					<div>
						<p className="text-cyan-400 hover:text-gray-700 mr-4">
							<FontAwesomeIcon
								icon={faCalendarCheck}
								className="mr-2"
							/>
							{date}
						</p>
					</div>
				</div>
				<div className="flex items-center absolute bottom-4 right-4">
					<p className="text-yellow-400 mr-4">
						{rate}
						<FontAwesomeIcon
							icon={faStar}
							className="ml-1"
						/>
					</p>
				</div>
			</div>
		</>
	);
}

export default CommentsCard;
