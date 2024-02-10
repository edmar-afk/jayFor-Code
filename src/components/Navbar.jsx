import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLink } from "./data/Links";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import me from "../assets/img/favicon.png";
import { overview } from "./data/Links";
import { Tooltip } from "react-tooltip";
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

							<div className="md:order-2 mx-3 sm:mx-2">
								<button
									type="button"
									className="flex text-sm bg-gray-800 rounded-full focus:ring-1 focus:ring-purple-300 hover:scale-110 duration-300"
									id="user-menu-button"
									data-dropdown-toggle="user-dropdown"
									data-dropdown-placement="bottom">
									<span className="sr-only">Open user menu</span>
									<img
										className="w-10 h-10 rounded-full"
										src={me}
										alt="user photo"
									/>
								</button>

								<div
									className="z-50 hidden break-words my-4 text-base list-none divide-y rounded-lg shadow bg-gray-700 divide-gray-600"
									id="user-dropdown">
									<div className="px-4 py-3">
										<span className="block text-sm text-white">Edmar Jay O. Heolin</span>
										<span className="block text-sm truncate text-gray-400">jaywrsnp6@gmail.com</span>
									</div>

									<ul
										className="py-2"
										aria-labelledby="user-menu-button">
										<div className="px-4 text-xs text-orange-400 mb-4 text-center leading-1">
											<p>Everything below is </p>
											<p>just a dummy data.</p>
											<p>Still working on database.</p>
										</div>
										{overview.map((details) => {
											const { id, name, count, icon, info } = details;
											return (
												<li
													key={id}
													className="flex items-center"
													data-tooltip-id={id}
													data-tooltip-content={info}>
													<p className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">
														<FontAwesomeIcon
															icon={icon}
															className="text-purple-400 text-lg mr-2 animate-pulse"
														/>{" "}
														{name}: {count}
													</p>
													<Tooltip
														id={id}
														style={{ backgroundColor: "rgb(37 99 235)", color: "#fff", fontWeight: "bold" }}
													/>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
