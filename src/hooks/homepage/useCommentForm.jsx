import { useEffect, useState } from "react";
import satisfied from "../../assets/rates/satisfied.png";
import happy from "../../assets/rates/happy.png";
import neutral from "../../assets/rates/neutral.png";
import frustrated from "../../assets/rates/frustrated.png";
import angry from "../../assets/rates/angry.jpg";
import axios from "axios";
const url = "http://127.0.0.1:8000/api/";

const useCommentForm = () => {
	const [name, setName] = useState("");
	const [rate, setRate] = useState(3);
	const [currentDate, setCurrentDate] = useState("");
	const [imageSrc, setImageSrc] = useState(neutral);
	const [rateText, setRateText] = useState("Contented Client");
	const [feedback, setFeedback] = useState("");
	const [thankYou, setThankYou] = useState(false);

	useEffect(() => {
		const getCurrentDate = () => {
			const currentDate = new Date();
			const year = currentDate.getFullYear();
			const month = String(currentDate.getMonth() + 1).padStart(2, "0");
			const day = String(currentDate.getDate()).padStart(2, "0");
			return `${year}-${month}-${day}`;
		};

		setCurrentDate(getCurrentDate());
	}, []);

	useEffect(() => {
		switch (rate) {
			case 1:
				setImageSrc(angry);
				setRateText("Angry Client");
				break;
			case 2:
				setImageSrc(frustrated);
				setRateText("Frustrated Client");
				break;
			case 3:
				setImageSrc(neutral);
				setRateText("Contented Client");
				break;
			case 4:
				setImageSrc(happy);
				setRateText("Happy Client");
				break;
			case 5:
				setImageSrc(satisfied);
				setRateText("Satisfied Client");
				break;
			default:
				setImageSrc(neutral);
				setRateText("Contented Client");
				break;
		}
	}, [rate]);

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleRate = (e) => {
		const selectedRate = parseInt(e.target.value);
		setRate(selectedRate);
	};

	const handleFeedback = (e) => {
		setFeedback(e.target.value);
	};

	const handleSubmit = async () => {
		event.preventDefault();
		try {
			const response = await axios.post(`${url}comments/`, {
				name: name,
				rate: rate,
				date: currentDate,
				comment: feedback,
			});
			console.log(response.data);
			setThankYou(true);
			// Optionally, you can reset the form fields after successful submission
			// setName("");
			// setRate(3);
			// setFeedback("");
		} catch (error) {
			console.error(error);
		}
	};

	return {
		name,
		rate,
		currentDate,
		imageSrc,
		rateText,
		feedback,
		thankYou,
		handleName,
		handleRate,
		handleFeedback,
		handleSubmit,
	};
};

export default useCommentForm;
