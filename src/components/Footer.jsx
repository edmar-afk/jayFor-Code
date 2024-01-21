/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { socialLinks } from "./data/Links";
function Footer() {
	return (
		<>
			<footer className="bg-gray-800">
				<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
					<p
						
						className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full bg-purple-900 text-white hover:bg-purple-700 duration-200"
						role="alert">
						<span className="text-xs bg-purple-400 hover:bg-purple-200 duration-200 rounded-full text-white font-bold px-4 py-1.5 mr-3">Updated</span>
						<span className="text-sm font-medium mr-">January 21, 2024 <FontAwesomeIcon icon={faCalendarAlt} className="ml-1"/></span>
						
					</p>
					<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
						Crafting Digital Excellence
					</h1>
					<p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">
						Freelance Developer Redefining Possibilities and Building Sustainable Digital Ecosystems for Lasting Success
					</p>
					
					<div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
						<span className="font-semibold text-gray-400 uppercase text-xl">VISIT ME IN</span>
						<div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
							{socialLinks.map((links) => {
								return (
									<a
										href={links.link} key={links.id} target="_blank" rel="noreferrer"
										className="mr-5 mb-5 lg:mb-0 hover:text-gray-400 flex items-center">
										<FontAwesomeIcon icon={links.icon} className="text-5xl" /><span className="text-3xl font-bold ml-2 hidden md:block">{links.name}</span>
									</a>
								);
							})}
							
						</div>
						
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
