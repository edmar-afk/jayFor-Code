import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import Gradient from "../../components/Gradient";
function Banner() {
	return (
		<>
			<div className="relative">
				<Gradient />
				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
					<div className="relative pt-24 md:pt-36 ml-auto">
						<div className="lg:w-2/3 text-center mx-auto">
							<h1 className="text-purple-800 font-bold text-4xl md:text-6xl xl:text-7xl">
								Elevate Code <br />
								<span className="text-white">Illuminate Innovation.</span>
							</h1>
							<p className="mt-8 text-gray-300 italic font-semibold">
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
						<div className="grid grid-cols-1 mt-4 text-center sm:mt-4 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
							<div className="space-y-4">
								<h3 className="text-2xl font-bold leading-tight text-purple-400">Frontend Developer</h3>
								<p className="text-lg font-normal text-gray-400">
									Specializes in creating Landing pages and any font-end designs.
								</p>
							</div>

							<div className="space-y-4">
								<h3 className="text-2xl font-bold leading-tight text-purple-400">Backend Developer</h3>
								<p className="text-lg font-normal text-gray-400">
									Specializes in creating interactive fullstack webapp.
								</p>
							</div>

							<div className="space-y-4">
								<h3 className="text-2xl font-bold leading-tight text-purple-400">Mobile App Developer</h3>
								<p className="text-lg font-normal text-gray-400">
									Noob in creating mobile app. For personal hobbies only.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Banner;
