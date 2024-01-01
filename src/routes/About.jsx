import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation, faLaptopCode, faFile } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { contactInformation } from "../components/data/Links";
import { experience } from "../components/data/Links";
import { references } from "../components/data/Links";
import { useState, useEffect } from "react";
import me from "../assets/img/favicon.png";
import Loader from "../components/Loader";
import ChatBot from "../components/ChatBot";
function About() {
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 2000);
	}, []);

	if (loader) {
		return (
			<>
				<Loader />
			</>
		);
	}
	return (
		<>
			<div className="mt-36">
				<div className="p-4 text-white">
					<div className="flex flex-col md:flex-row mb-12">
						<div className="flex flex-col max-w-[100%] md:w-[320px] rounded-xl items-center justify-center p-2">
							<img
								src={me}
								alt="me"
								className="w-[150px] rounded-lg mb-2"
							/>
							<div className="flex flex-auto">
								<p className="mt-4 text-center">
									“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more
									to take away.” –<span className="italic font-bold text-green-500">Antoine de Saint – Exupery</span>
								</p>
							</div>
						</div>

						<div className="rounded-xl ml-2 p-2 w-full bg-gray-900 bg-opacity-80">
							<div className="p-2">
								<div className="flex justify-between flex-wrap">
									<h1 className="text-white font-bold flex text-center text-[25px]">Edmar Jay O. Heolin</h1>
								</div>

								<div className="flex justify-between items-center flex-wrap">
									<p className="text-md text-gray-400">Software Engineer</p>

									<p className="text-md flex items-center">
										<FontAwesomeIcon
											icon={faMapLocation}
											className="mr-2 text-green-500 text-[19px]"
										/>
										Pob. Guipos
									</p>
								</div>
								<p className="mt-10 text-sm">Experience</p>
								<p className="flex items-center mt-2">
									<FontAwesomeIcon
										icon={faLaptopCode}
										className="mr-2 text-green-500 text-[19px]"
									/>
									100+ Webapps Created
								</p>
								<div className="flex justify-start items-center flex-wrap sm:flex-row sm:items-center md:justify-start mt-5">
									<a
										rel="noreferrer"
										href="https://web.facebook.com/jayjanezkieO3"
										target="_blank"
										className="bg-green-500 w-[150px] md:w-[160px] justify-center rounded-md p-2 font-secondary hover:text-cyan-400 hover:bg-cyan-400/10 duration-200 flex items-center text-sm mr-2 sm:mb-0">
										<FontAwesomeIcon
											icon={faFacebook}
											className="bg-green-700 p-2 rounded-full tex mr-2"
										/>
										<p>Send message</p>
									</a>
									<a
										href="pdf"
										target="_blank"
										className="bg-green-500 w-[140px] md:w-[160px] flex items-center justify-center ml-0 sm:ml-8 rounded-md p-2 font-cyan-400 text-sm hover:text-cyan-400 duration-200 hover:bg-cyan-400/10">
										<FontAwesomeIcon
											icon={faFile}
											className="bg-green-700 p-2 rounded-full mr-2"
										/>
										<p>View Resume</p>
									</a>
								</div>
								<div className="mt-12 flex items-center border-2 border-x-0 border-t-0 border-b-gray-500 p-2">
									<div className="text-sm flex items-center text-white font-bold mr-5">
										<i className="mr-2 fa fa-user-alt text-white text-lg"></i>
										About Me
									</div>
								</div>
								<div className="flex flex-wrap justify-between">
									<div className="flex flex-col">
										<div className="text-sm">
											<p className="mt-12 text-green-500 font-bold text-md">Contact Information</p>
											{contactInformation.map((info) => {
												const { id, type, contact, href, icon } = info;
												return (
													<div
														className="flex mt-7"
														key={id}>
														<p className="mr-12 flex items-center">
															<FontAwesomeIcon
																icon={icon}
																className="mr-2"
															/>
															{type}:
														</p>
														<a
															href={href}
															className="text-gray-400">
															{contact}
														</a>
													</div>
												);
											})}
										</div>
										<div className="text-sm">
											<p className="mt-12 text-green-500 font-bold text-md">Basic Information</p>

											<div className="flex mt-7">
												<p className="mr-12 flex items-center">
													{/* <FaMale className="mr-2" /> */}
													Gender:
												</p>
												<a
													href="3"
													className="text-gray-400">
													Male
												</a>
											</div>
										</div>
									</div>
									<div className="flex flex-row mt-12 justify-center">
										<div className="text-sm">
											<div className="leading-1">
												<p className="text-green-500 font-bold text-md mb-4">Experience:</p>
												{experience.map((exp) => {
													const { id, date, skills, stack } = exp;
													return (
														<p
															className="my-2"
															key={id}>
															<span className="text-cyan-400 font-bold">{date} • </span>
															{skills} -<span className="text-green-500 font-semibold"> {stack}</span>
														</p>
													);
												})}
											</div>

											<div className="leading-1 mt-8">
												<p className="text-green-500 font-bold text-md mb-0">References:</p>
												{references.map((contacts) => {
													const { id, name, contact, icon, href } = contacts;
													return (
														<div key={id}>
															<p className="mt-2">{name}</p>
															<div className="ml-2 mt-1">
																<p className="text-xs text-cyan-400 font-semibold">Personal Information:</p>
																<p className="hover:text-green-500 duration-300">
																	<FontAwesomeIcon
																		icon={icon}
																		className="text-xs mr-3"
																	/>
																	<a
																		href={href}
																		className="text-xs ml">
																		{contact}
																	</a>
																</p>
															</div>
														</div>
													);
												})}
											</div>
										</div>
									</div>
									<div></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ChatBot/>
		</>
	);
}

export default About;
