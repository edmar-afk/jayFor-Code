import Gradient from "../../components/Gradient";
import Ads from "../Ads";
import bannerLogo from "../../assets/img/bannerLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle, faEye, faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
function Banner() {
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
									<div className="flex flex-row py-3">
										<div className="flex flex-row items-center border-[1px] border-purple-300 w-fit py-1.5 px-4 text-white hover:bg-purple-400 duration-200 cursor-pointer">
											<FontAwesomeIcon icon={faThumbsUp} />
											<p className="ml-1">Like</p>
										</div>
										<div className="flex flex-row items-center border-[1px] border-purple-300 border-l-0 w-fit py-1.5 px-3 text-white">
											<p className="text-center">0</p>
										</div>
									</div>

									<div className="flex flex-row ml-4 sm:ml-6 py-3">
										<div className="flex flex-row items-center border-[1px] border-purple-300 w-fit py-1.5 px-4 text-white">
											<FontAwesomeIcon icon={faEye} />
											<p className="ml-1">Views</p>
										</div>
										<div className="flex flex-row items-center border-[1px] border-purple-300 border-l-0 w-fit py-1.5 px-3 text-white">
											<p className="text-center">0</p>
										</div>
									</div>

									<div className="flex flex-row ml-4 sm:ml-6 py-3">
										<div className="flex flex-row items-center border-[1px] border-purple-300 w-fit py-1.5 px-4 text-white">
											<FontAwesomeIcon icon={faStar} />
											<p className="ml-1">Rate</p>
										</div>
										<div className="flex flex-row items-center border-[1px] border-purple-300 border-l-0 w-fit py-1.5 px-3 text-white">
											<p className="text-center">0.0</p>
										</div>
									</div>
								</div>
								<p className="text-center text-red-400 animate-pulse">
									<FontAwesomeIcon
										icon={faExclamationTriangle}
										className="mr-2"
									/>
									Currently working on these features
									<FontAwesomeIcon
										icon={faExclamationTriangle}
										className="ml-2"
									/>
								</p>
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
