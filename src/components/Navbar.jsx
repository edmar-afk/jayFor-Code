import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLink } from "./data/Links";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import me from "../assets/img/favicon.png";
import NavModal from "./NavModal";
import { useState } from "react";
function Navbar() {
	const [navModal, setNavModal] = useState(false);

	const handleNavModal = () => {
		setNavModal(true);
	};

	const hideNavModal = () => {
		setNavModal(false);
	};

	return (
		<>
			<nav className="z-10 w-full fixed backdrop-blur-sm top-0">
				{navModal && <NavModal hideModal={hideNavModal} />}
				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
					<div className="flex flex-row items-center justify-between py-2 md:py-4 md:gap-0 mt-8">
						<div className="relative z-20 flex justify-between md:px-0">
							<Link
								to={"/"}
								aria-label="logo"
								className="flex space-x-2 items-center ">
								<img
									src={Logo}
									width="40"
									alt=""
									draggable="false"
								/>
								<span className="text-lg sm:text-2xl font-bold text-white hidden sm:block">JayForCode</span>
							</Link>
						</div>

						<div className="flex flex-row flex-wrap items-center">
							<ul
								className="py-2 font-medium hidden lg:flex flex-row"
								role="none">
								{navLink.map((links) => {
									const { id, name, icon, color, href } = links;
									return (
										<li key={id}>
											<Link
												to={href}
												className="block px-4 mr-6 py-2 text-sm text-gray-400 hover:bg-purple-600 rounded-xl hover:text-white"
												role="menuitem">
												<div className="flex items-center">
													<FontAwesomeIcon
														icon={icon}
														className={`mr-2 animate-pulse ${color}`}
													/>
													{name}
												</div>
											</Link>
										</li>
									);
								})}
							</ul>

							<div className="flex items-center md:order-1 sm:mx-2 lg:hidden">
								<button
									type="button"
									onClick={handleNavModal}
									className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm border border-purple-400 hover:bg-purple-400 text-white rounded-lg cursor-pointer hover:text-black duration-300">
									<FontAwesomeIcon
										icon={faCircleChevronDown}
										className="mr-1 animate-pulse"
									/>{" "}
									Menu
								</button>
							</div>

							<div className="md:order-2 mx-3 sm:mx-2 relative">
								<button
									type="button"
									className="flex text-sm bg-gray-800 rounded-full focus:ring-1 focus:ring-purple-300 hover:scale-110 duration-300">
									<img
										className="w-10 h-10 rounded-full"
										src={me}
										alt="user photo"
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
