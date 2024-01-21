/* eslint-disable react/prop-types */import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { navLink } from "./data/Links";
import { Link } from "react-router-dom";
function NavModal(props) {
	const { hideModal } = props;
	return (
		<div className="lg:hidden">
			<div
				aria-hidden="true"
				className="fixed z-10 inset-0 h-screen w-screen backdrop-blur-2xl transition duration-500 origin-top scale-y-100 bg-gray-900/70 "></div>
			<div className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border shadow-gray-600/10 justify-end w-full   absolute top-full left-0 transition-all duration-300 origin-top translate-y-0 scale-100 opacity-100 visible shadow-none bg-gray-800 border-gray-700 ">
				<div className="text-gray-300 w-full">
					<ul className="tracking-wide font-medium flex-col flex gap-6">
						{navLink.map((link) => {
							const { id, icon, color, name, href, hidden } = link;
							return (
								<li
									className="hover:scale-110 duration-300"
									key={id}>
									<Link
										to={href}
										onClick={hideModal}
										className={`block md:px-4 transition hover:text-cyan-400 hover:animate-pulse ${hidden}`}>
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

				<div className="mt-12">
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
	);
}

export default NavModal;
