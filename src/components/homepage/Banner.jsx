import Gradient from "../../components/Gradient";import Ads from "../Ads";
import bannerLogo from "../../assets/img/bannerLogo.svg";
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
								<div className="mb-24 w-fit hidden sm:block text-white font-extralight text-lg border-b-2 border-gray-300">
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
								<p className="mt-8 text-gray-300 italic font-semibold text-sm text-center block md:hidden">
									The computer is incredibly fast, accurate, and stupid. Man is incredibly slow, inaccurate, and
									brilliant. The marriage of the two is a force beyond calculation
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
