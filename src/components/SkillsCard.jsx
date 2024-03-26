/* eslint-disable react/no-unescaped-entities */ /* eslint-disable react-hooks/rules-of-hooks */ import {
	faCubesStacked,
	faDatabase,
	faMobile,
	faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
function skillsCard() {
	const [showSkill1, setShowSkill1] = useState(false);
	const [showSkill2, setShowSkill2] = useState(false);
	const [showSkill3, setShowSkill3] = useState(false);
	const [aboutLink, setAboutLink] = useState(false);
	return (
		<>
			<div className="flex flex-row justify-evenly mt-4 flex-wrap">
				<div
					onMouseEnter={() => setShowSkill1(true)}
					onMouseLeave={() => setShowSkill1(false)}
					className="flex flex-row items-center my-1 justify-evenly bg-slate-800 hover:bg-purple-600 duration-300 p-4 h-[100px] rounded-xl w-full max-w-[150px] md:max-w-[200px]">
					<p>
						<FontAwesomeIcon
							icon={faMobile}
							className="text-2xl md:text-5xl"
						/>
					</p>
					<p className="text-sm md:text-md">Mobile App Development</p>
				</div>

				<div
					onMouseEnter={() => setShowSkill2(true)}
					onMouseLeave={() => setShowSkill2(false)}
					className="flex flex-row items-center my-1 justify-evenly bg-slate-800 hover:bg-purple-600 duration-300 p-4 h-[100px] rounded-xl w-full max-w-[150px] md:max-w-[200px]">
					<p>
						<FontAwesomeIcon
							icon={faCubesStacked}
							className="text-2xl md:text-5xl"
						/>
					</p>
					<p className="text-sm md:text-md">Front End Development</p>
				</div>

				<div
					onMouseEnter={() => setShowSkill3(true)}
					onMouseLeave={() => setShowSkill3(false)}
					className="flex flex-row items-center my-1 justify-evenly bg-slate-800 hover:bg-purple-600 duration-300 p-4 h-[100px] rounded-xl w-full max-w-[150px] md:max-w-[200px]">
					<p>
						<FontAwesomeIcon
							icon={faDatabase}
							className="text-2xl md:text-5xl"
						/>
					</p>
					<p className="text-sm md:text-md">Back End Development</p>
				</div>

				<Link
					to={"/about"}
					onMouseEnter={() => setAboutLink(true)}
					onMouseLeave={() => setAboutLink(false)}
					className="flex flex-row items-center justify-evenly bg-slate-800 my-1 hover:cursor-pointer hover:bg-purple-600 duration-300 p-4 h-[100px] rounded-xl w-full max-w-[150px] md:max-w-[200px]">
					<p className="text-lg">See more</p>

					<FontAwesomeIcon icon={faUpRightFromSquare} />
				</Link>
			</div>

			{showSkill1 && (
				<p className="text-sm md:text-md mt-4">
					I may not be the master of widgets or the wizard of animations, but I promise to navigate through code with
					the grace of a butterfly...or at least attempt to!
				</p>
			)}
			{showSkill2 && (
				<p className="text-sm md:text-md mt-4">
					I'll sprinkle some magic into your projects, turning code into captivating visuals faster than you can say
					'responsive design
				</p>
			)}
			{showSkill3 && (
				<p className="text-sm md:text-md mt-4">
					API..... ehh I don't know the rest, the important is I have experience with them. As your resident backend
					aficionado, I'm here to wield the power of APIs, MySQL, and Django with finesse
				</p>
			)}
			{aboutLink && <p className="text-sm md:text-md mt-4">Click to visit</p>}
		</>
	);
}

export default skillsCard;
