import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import Gradient from "../../components/Gradient";
import { faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import BreakLine from '../BreakLine'
function Banner() {
	return (
		<>
			<div className="relative">
				<Gradient />
				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
					<div className="relative pt-24 md:pt-36 ml-auto">
						<div className="lg:w-2/3 text-center mx-auto">
							<h1 className="bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-800 bg-clip-text text-transparent font-bold text-3xl md:text-6xl xl:text-7xl">
								Catalyzing Growth <br />
								<span className="">Illuminate Innovation.</span>
							</h1>
							<p className="mt-8 text-gray-300 italic font-semibold text-sm md:text-lg">
								The computer is incredibly fast, accurate, and stupid. Man is incredibly slow, inaccurate, and
								brilliant. The marriage of the two is a force beyond calculation
							</p>
							<div className="mt-16 flex flex-row flex-wrap justify-center gap-y-4 gap-x-6">
								<a
									rel="noreferrer"
									href="https://www.paypal.com/paypalme/my/settings?flow=cmV0dXJuVXJsPWh0dHBzOi8vd3d3LnBheXBhbC5jb20vbXlhY2NvdW50L3RyYW5zZmVyL2hvbWVwYWdlL3JlcXVlc3QmY2FuY2VsVXJsPWh0dHBzOi8vd3d3LnBheXBhbC5jb20vbXlhY2NvdW50L3RyYW5zZmVyL2hvbWVwYWdlL3JlcXVlc3Q="
									target="_blank"
									className="relative flex h-11 items-center justify-center px-4 md:px-6 border-2 border-purple-400 rounded-3xl hover:bg-purple-400 duration-300 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 w-max">
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
									className="relative flex bg-purple-400 h-11 items-center justify-center px-4 md:px-6 rounded-full hover:scale-110 duration-300 w-max">
									<span className="relative text-base font-semibold text-white">
										<FontAwesomeIcon
											icon={faNoteSticky}
											className="mr-1"
										/>{" "}
										Resume
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-gray-900 antialiased">
					<div className="max-w-screen-xl px-4 py-24 mx-auto lg:px-6">
						<div className="grid grid-cols-1 mt-4 text-center sm:mt-4 gap-x-20 gap-y-2 md:grid-cols-2">
							<div className="space-y-4 bg-gradient-to-r from-purple-800 via-purple-900 to-purple-950 hover:bg-gradient-to-br p-4 md:p-8 rounded-xl">
								<FontAwesomeIcon
									icon={faReact}
									className="text-blue-400 text-6xl animate-spin"
								/>
								<h3 className="text-2xl font-bold leading-tight text-white">Frontend Developer</h3>
								<p className="text-lg font-normal text-white">
									Specializes in creating Landing pages in font-end designs and frameworks.
								</p>
							</div>

							<div className="space-y-4 bg-gradient-to-r from-purple-800 via-purple-900 to-purple-950 hover:bg-gradient-to-br p-4 md:p-8 rounded-xl">
								<FontAwesomeIcon
									icon={faPython}
									className="text-yellow-400 text-6xl animate-pulse"
								/>
								<h3 className="text-2xl font-bold leading-tight text-white">Backend Developer</h3>
								<p className="text-lg font-normal text-white">
									Specializes in creating interactive fullstack webapp using Python Framework Django.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BreakLine/>
		</>
	);
}

export default Banner;
