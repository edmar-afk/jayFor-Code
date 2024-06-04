import Gradient from "../../components/Gradient";import Ads from "../Ads";import bannerLogo from "../../assets/img/bannerLogo.svg";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSpinner, faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import API_URL from "../data/api";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
function Banner() {
	const [views, setViews] = useState([]);
	const [like, setLike] = useState(false);
	const [likesCount, setLikesCount] = useState([]);
	const [averageRate, setAverageRate] = useState("");
	const [isLoading, setIsLoading] = useState(true); // Initial loading state

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true); // Set loading to true before the fetch
			try {
				const response = await axios.get(`${API_URL}/api/visits/`);
				const likesResponse = await axios.get(`${API_URL}/api/likes/`);
				const commentsResponse = await axios.get(`${API_URL}/api/comments/`);

				setViews(response.data.length);
				setLikesCount(likesResponse.data.length);

				const comments = commentsResponse.data;
				const commentRates = comments.map((comment) => comment.rate);
				const totalRates = commentRates.reduce((accumulator, rate) => accumulator + rate, 0);
				setAverageRate(totalRates / commentRates.length);
			} catch (error) {
				console.error("Error fetching data:", error.response);
			} finally {
				setIsLoading(false); // Set loading to false after fetch (regardless of success/error)
			}
		};

		fetchData();

		const intervalId = setInterval(fetchData, 8000); // Set up polling interval

		return () => clearInterval(intervalId);
	}, []);

	const handleClick = () => {
		if (!like) {
			axios
				.post(`${API_URL}/api/likes/`)
				.then((response) => {
					if (response.data.status === "success") {
						setLike(true);
						Swal.fire("Thanks for appreciating my crafts!");
					} else {
						const swalWithTailwindButtons = Swal.mixin({
							customClass: {
								confirmButton: "bg-red-700 py-2 px-4 border-none rounded-xl text-white",
								cancelButton: "mr-3 bg-green-700 py-2 px-4 border-none rounded-xl text-white",
							},
							buttonsStyling: false,
						});

						swalWithTailwindButtons
							.fire({
								title: "Already Clicked Like!",
								text: "You can't like me two times! Not until you buy me a drink first",
								icon: "info",
								showCancelButton: true,
								confirmButtonText: "I like to unlike you!",
								cancelButtonText: "Sorry, I forgot!",
								reverseButtons: true,
							})
							.then(async (result) => {
								if (result.isConfirmed) {
									try {
										const response = await axios.delete(`${API_URL}/api/likes/delete_latest/`);
										swalWithTailwindButtons.fire({
											title: "You don't like me anymore?",
											text: response.data.message,
											icon: "question",
										});
									} catch (error) {
										console.error("Error deleting latest data:", error);
										swalWithTailwindButtons.fire({
											title: "Error!",
											text: "Failed to delete your like, I guess fate tells you otherwise :)",
											icon: "error",
										});
									}
								} else if (result.dismiss === Swal.DismissReason.cancel) {
									swalWithTailwindButtons.fire({
										title: "You got me there!",
										text: "You're not old, you just forget things.",
										icon: "info",
									});
								}
							});
					}
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}
	};

	return (
		<>
			<div className="relative">
				<Gradient customStyle="top-4 right-4" />
				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-36 md:mt-28">
					<div className="justify-between text-gray-600 md:flex flex-row-reverse items-center">
						<div className="md:w-5/6 lg:w-1/2 hidden md:block">
							<img
								src={bannerLogo}
								alt="image"
								loading="lazy"
								draggable="false"
								width=""
								height=""
								className="w-full"
							/>
						</div>
						<div className="flex flex-row">
							<div className="flex flex-col">
								<div className="mb-16 w-fit hidden sm:block text-white font-extralight text-lg border-b-2 border-gray-300">
									<p>Actively accepting clients</p>
									<p className="mb-4">Worldwide</p>
									{/* <FontAwesomeIcon
										icon={faShare}
										className=""
									/> */}
								</div>
								<div className="text-3xl font-bold md:text-5xl text-purple-400 text-center md:text-left">
									<p className="text-white text-4xl md:text-5xl lg:text-7xl">Freelance</p>
									<p className="py-4">Software Developer</p>
								</div>
								<p className="mt-8 text-gray-300 italic font-semibold text-md text-center block md:hidden">
									The computer is incredibly fast, accurate, and stupid. Man is incredibly slow, inaccurate, and
									brilliant. The marriage of the two is a force beyond calculation
								</p>

								<div className="flex flex-row mt-4 justify-center sm:justify-start flex-wrap">
									<div className="flex flex-row py-3 ">
										<div className="flex p-0.5 animate-gradient-x bg-gray-900 from-purple-400 via-cyan-500 to-orange-500 [animation-duration:_2s] bg-gradient-to-r">
											<div
												onClick={handleClick}
												className="flex flex-row items-center bg-gray-900 border-0  border-purple-300 w-fit py-1.5 px-4 text-white hover:bg-purple-950 duration-200 cursor-pointer">
												<FontAwesomeIcon icon={faThumbsUp} />
												<p className="ml-1">Likes</p>
											</div>
											<div className="flex flex-row ml-0.5 items-center border-0 bg-gray-900 border-purple-300 border-l-0 w-fit py-1.5 px-3 text-white">
												<p className="text-center">
													{isLoading ? (
														<FontAwesomeIcon
															icon={faSpinner}
															className="animate-spin w-4"
														/>
													) : (
														<p>{likesCount}</p>
													)}
												</p>
											</div>
										</div>
									</div>

									<div className="flex flex-row ml-4 sm:ml-6 py-3">
										<div className="flex flex-row items-center border-[1px] border-purple-300 w-fit py-1.5 px-4 text-white">
											<FontAwesomeIcon icon={faEye} />
											<p className="ml-1">Views</p>
										</div>
										<div className="flex flex-row items-center border-[1px] border-purple-300 border-l-0 w-fit py-1.5 px-3 text-white">
											<p className="text-center">
												{isLoading ? (
													<FontAwesomeIcon
														icon={faSpinner}
														className="animate-spin w-4"
													/>
												) : (
													<p>{views}</p>
												)}
											</p>
										</div>
									</div>

									<div className="flex flex-row ml-4 sm:ml-6 py-3">
										<div className="flex flex-row items-center border-[1px] border-purple-300 w-fit py-1.5 px-4 text-white">
											<FontAwesomeIcon icon={faStar}  className="animate-pulse"/>
											<p className="ml-1">Ratings</p>
										</div>
										<div className="flex flex-row items-center border-[1px] border-purple-300 border-l-0 w-fit py-1.5 px-3 text-white">
											<p className="text-center">
												{isLoading ? (
													<FontAwesomeIcon
														icon={faSpinner}
														className="animate-spin w-4"
													/>
												) : (
													<p>{averageRate}</p>
												)}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Gradient customStyle="left-[-160px] bottom-[-100px]" />
				</div>
			</div>
			<Ads />
		</>
	);
}

export default Banner;
