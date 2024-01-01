import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { faShop } from "@fortawesome/free-solid-svg-icons";
import { navLink } from "./data/Links";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavModal from "./NavModal";
function Navbar() {
	const [navBarModal, setNavBarModal] = useState(false);

	function hideNavModal() {
		setNavBarModal(false);
	}

	return (
		<>
			<nav className="z-10 w-full fixed backdrop-blur-sm top-0">
				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
					<div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative mt-8">
						<div className="relative z-20 w-full flex justify-between lg:w-max md:px-0 ">
							<Link
								to={"/"}
								aria-label="logo"
								className="flex space-x-2 items-center ">
								<img
									src={Logo}
									width="30"
									alt=""
								/>
								<span className="text-2xl font-bold text-white ">JayForCode</span>
							</Link>

							<div className="relative flex items-center lg:hidden max-h-10 ">
								<label
									role="button"
									onClick={() => {
										setNavBarModal(!navBarModal);
									}}
									htmlFor="toggle_nav"
									aria-label="humburger"
									id="hamburger"
									className="relative  p-6 -mr-6 ">
									<div
										aria-hidden="true"
										id="line"
										className="m-auto h-0.5 w-5 rounded bg-gray-300 transition duration-300 "></div>
									<div
										aria-hidden="true"
										id="line2"
										className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-300 transition duration-300 "></div>
								</label>
							</div>
						</div>

						{navBarModal && <NavModal toggle={hideNavModal} />}

						<div
							className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                             lg:shadow-none 
                            shadow-none bg-gray-800 border-gray-700 ">
							<div className="text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0 ">
								<ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0 ">
									{navLink.map((link) => {
										const { id, icon, color, name, href } = link;
										return (
											<li
												className="hover:scale-110 duration-300"
												key={id}>
												<Link
													to={href}
													className="block md:px-4 transition hover:text-cyan-400 hover:animate-pulse ">
													<span className="">
														<FontAwesomeIcon
															icon={icon}
															className={color}
														/>{" "}
														{name}
													</span>
												</Link>
											</li>
										);
									})}
								</ul>
							</div>

							<div className="mt-12 lg:mt-0 ">
								<Link
									to="/shop"
									className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-cyan-400 before:transition before:duration-300 hover:before:scale-105 hover:bg-transparent active:duration-75 active:before:scale-95 sm:w-max ">
									<span className="relative text-sm font-semibold text-white ">
										<span className="text-gray-800 hover:text-white duration-300 font-bold">
											<FontAwesomeIcon
												icon={faShop}
												className="text-orange-700"
											/>{" "}
											My Shop
										</span>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
