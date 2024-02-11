import { useState, useEffect } from "react";
import CommentsCard from "../../components/CommentsCard";
import axios from "axios";
import satisfied from "../../assets/rates/satisfied.png";
import happy from "../../assets/rates/happy.png";
import neutral from "../../assets/rates/neutral.png";
import frustrated from "../../assets/rates/frustrated.png";
import angry from "../../assets/rates/angry.jpg";
import { faLaughBeam, faSmileBeam, faFaceMeh, faFaceGrimace, faFaceAngry } from "@fortawesome/free-solid-svg-icons";
function Comments() {
	const [comments, setComments] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get("https://heolinapi.pythonanywhere.com/api/comments/");
			setComments(response.data);
			console.log(response);
		} catch (error) {
			console.log("Error: ", error.response);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<div className="p-4">
				<p className="text-white font-bold text-3xl md:text-4xl xl:text-5xl text-center py-2">
					Words from my Happy Clients
				</p>
				<p className="text-white text-center mt-4 italic">
					Hello awesome visitors! Meet Sunshine, Bliss, and Dr. Glee – all on cloud nine with satisfaction and joy.
					Cheers to success! 🌟🎉
				</p>
			</div>
			<div className="flex flex-row justify-evenly flex-wrap p-2 sm:p-8">
				{comments.map((clients) => {
					const { id, name, rate, comment, date } = clients;
					let imageSrc;
					let rateText;
					let clientEmotion;

					switch (rate) {
						case 1:
							imageSrc = angry;
							rateText = "Angry Client";
							clientEmotion = faFaceAngry;
							break;
						case 2:
							imageSrc = frustrated;
							rateText = "Frustrated Client";
							clientEmotion = faFaceGrimace;
							break;
						case 3:
							imageSrc = neutral;
							rateText = "Contented Client";
							clientEmotion = faFaceMeh;
							break;
						case 4:
							imageSrc = happy;
							rateText = "Happy Client";
							clientEmotion = faSmileBeam;
							break;
						case 5:
							imageSrc = satisfied;
							rateText = "Satisfied Client";
							clientEmotion = faLaughBeam;
							break;
						default:
							imageSrc = happy;
							clientEmotion = faSmileBeam;
							break;
					}

					return (
						<CommentsCard
							key={id}
							name={name}
							icon={clientEmotion}
							rate={rate}
							feedback={comment}
							date={date}
							imageSrc={imageSrc}
							rateText={rateText}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Comments;
