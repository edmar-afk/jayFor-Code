import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "./data/Links";
import Logo from "../assets/logo.png";
function Footer() {
	return (
		<>
			<footer className="bg-gray-800">
				<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
					<div className="md:flex md:justify-between">
						<div className="mb-6 md:mb-0">
							<a
								href="https://flowbite.com/"
								className="flex items-center">
								<img
									src={Logo}
									width="30"
									className="h-8 me-3"
									alt="FlowBite Logo"
								/>
								<span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
									Edmar Jay Heolin
								</span>
							</a>
						</div>
					</div>
					<hr className="my-6 border-gray-200 mx-auto lg:my-8" />
					<div className="sm:flex sm:items-center sm:justify-between">
						<span className="text-sm sm:text-center text-gray-400">
							© 2023 JayForCode.
							<span className="text-green-500 font-bold"> Last Update: Jan. 1, 2024.</span>
						</span>
						<div className="flex mt-4 justify-center sm:mt-0">
							{socialLinks.map((social) => {
								const {id, link, icon, name} = social
								return (
									<a
										key={id}
										href={link}
										rel="noreferrer"
										target="_blank"
										className="text-gray-500 hover:text-white">
										<FontAwesomeIcon
											icon={icon}
											className="w-8 h-8 hover:scale-125 hover:text-cyan-400 duration-500 mx-2"
										/>
										<span className="sr-only">{name}</span>
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
