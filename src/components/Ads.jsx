import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";
import { ads } from "./data/Links";
import Gradient from "./Gradient";
import { useState } from "react";
function Ads() {
	const [isHover, setIsHover] = useState(false);
	return (
		<>
			<div className="p-4 mt-24 overflow-hidden">
				<Gradient customStyle={`right-12 duration-300 ${isHover ? 'scale-100': 'scale-0'}`}/>
				<div className="flex flex-row justify-evenly font-bold text-gray-500 text-xs md:text-lg">
					<Marquee>
						{ads.map((lists) => {
							return (
								<>
									<p
										onMouseEnter={() => setIsHover(true)}
										onMouseLeave={() => setIsHover(false)}
										className="mr-5 mb-5 lg:mb-0 cursor-pointer overflow-hidden flex items-center mx-24 sm:mx-36 hover:text-purple-400 hover:drop-shadow-2xl duration-300"
										key={lists.id}>
										{
											<FontAwesomeIcon
												icon={lists.icon}
												className="text-5xl"
											/>
										}
										<span className="text-3xl font-bold ml-2 block">{lists.name}</span>
									</p>
								</>
							);
						})}
					</Marquee>
				</div>
			</div>
		</>
	);
}

export default Ads;
