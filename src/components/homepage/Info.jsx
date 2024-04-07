/* eslint-disable react/no-unescaped-entities */ import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { faCode } from "@fortawesome/free-solid-svg-icons";import BreakLine from "../BreakLine";
import serviceLogo from "../../assets/img/services.svg";
import SkillsCard from "../SkillsCard";
function Info() {
	return (
		<>
			<div className="max-w-full mx-auto px-3 lg:px-32 py-4">
				<div className="flex flex-col justify-center text-center">
					<FontAwesomeIcon
						icon={faCode}
						className="text-white text-2xl mb-4 md:mb-14"
					/>

					<p className="text-white text-center text-sm md:text-2xl leading-loose mb-4">
						Crafting new services for my portfolio is akin to weaving intricate lines of code into a tapestry of
						functionality and innovation. With each service I add, I stitch together a seamless user experience,
						creating a portfolio that showcases my skills as a software developer.
					</p>

					<div className="flex flex-row justify-evenly">
						<img
							src={serviceLogo}
							alt=""
							className="w-1/2 hidden md:block"
							draggable="false"
						/>
						<div className="flex flex-col">
							<p className="mb-2 text-cyan-400 text-lg mt-12 md:mt-36">━━━━━━━ Services ━━━━━━━</p>
							<p className="text-white text-center md:text-left">
								Hello, I'm Jay, a freelance software developer from Poblacion Guipos Zamboanga del Sur and a student of
								Zamboanga del Sur State University (ZDSSU).{" "}
								<span className="font-bold text-purple-400">P.S. I'm an Introvert.</span>
							</p>

							<div className="mt-8 text-white">
								<p>What I'm Good at:</p>

								<SkillsCard />
							</div>
						</div>
					</div>
				</div>
			</div>
			<BreakLine />
		</>
	);
}

export default Info;
