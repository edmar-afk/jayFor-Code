import { skillsLogo } from "../data/Links";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
function Banner() {
	return (
		<>
			<div className="relative">
				<div
					aria-hidden="true"
					className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
					<div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
					<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
				</div>
				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
					<div className="relative pt-24 md:pt-36 ml-auto">
						<div className="lg:w-2/3 text-center mx-auto">
							<h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">
								Shaping a world with
								<span className="text-white"> Reimagination.</span>
							</h1>
							<p className="mt-8 text-gray-300 italic font-semibold">
								The computer is incredibly fast, accurate, and stupid. Man is incredibly slow, inaccurate, and
								brilliant. The marriage of the two is a force beyond calculation
							</p>
							<div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
								<a
									rel="noreferrer"
									href="https://www.paypal.com/paypalme/my/settings?flow=cmV0dXJuVXJsPWh0dHBzOi8vd3d3LnBheXBhbC5jb20vbXlhY2NvdW50L3RyYW5zZmVyL2hvbWVwYWdlL3JlcXVlc3QmY2FuY2VsVXJsPWh0dHBzOi8vd3d3LnBheXBhbC5jb20vbXlhY2NvdW50L3RyYW5zZmVyL2hvbWVwYWdlL3JlcXVlc3Q="
									target="_blank"
									className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-gray-700 border-2 border-cyan-400 rounded-3xl before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
									<span className="relative text-base font-semibold text-white">
										<FontAwesomeIcon
											icon={faMugSaucer}
											className="mr-1"
										/>{" "}
										1 coffee
									</span>
								</a>
								<a
									rel="noreferrer"
									href="{% static 'files/Resume.pdf' %}"
									target="_blank"
									className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-cyan-400/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 before:border-gray-700 before:bg-gray-800 sm:w-max">
									<span className="relative text-base font-semibold text-white">
										<FontAwesomeIcon
											icon={faNoteSticky}
											className="mr-1"
										/>{" "}
										Resume
									</span>
								</a>
							</div>
							<div className="flex items-center py-4 mt-8 border-y border-gray-800 justify-evenly">
								{skillsLogo.map((icons) => {
									const { id, imgUrl, tooltip, title } = icons;
									return (
										<div key={id}>
											<div>
												<img
													data-tooltip-id={tooltip}
													data-tooltip-content={title}
													draggable="false"
													className="animate-pulse w-8 sm:w-14"
													data-tooltip-target={tooltip}
													src={imgUrl}
													alt=""
												/>
												<Tooltip
													id={tooltip}
													style={{ backgroundColor: "rgb(37 99 235)", color: "#fff", fontWeight: "bold" }}
												/>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Banner;
