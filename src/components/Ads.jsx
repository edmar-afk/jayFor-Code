import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
function Ads() {
	return (
		<>
			<div className="bg-gradient-to-r p-4 from-violet-400 to-purple-950 mt-24">
				<div className="flex flex-row justify-evenly font-bold text-white text-xs md:text-lg">
					<Marquee>
						<p className="mx-12">
							<FontAwesomeIcon
								icon={faShieldAlt}
								className="text-md"
							/>{" "}
							Trusted
						</p>
						<p className="mx-12">
							<FontAwesomeIcon
								icon={faCode}
								className="text-md"
							/>{" "}
							Freelancer
						</p>
						<p className="mx-12">
							<FontAwesomeIcon
								icon={faReact}
								className="text-md animate-spin"
							/>{" "}
							React Developer
						</p>
						<p className="mx-12">
							<FontAwesomeIcon
								icon={faPython}
								className="text-md"
							/>{" "}
							Django Developer
						</p>
						<p className="mx-12">
							<FontAwesomeIcon
								icon={faCode}
								className="text-md"
							/>{" "}
							Full Stack Developer
						</p>
					</Marquee>
				</div>
			</div>
		</>
	);
}

export default Ads;
