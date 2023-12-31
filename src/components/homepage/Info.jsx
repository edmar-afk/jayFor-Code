import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import bannerLogo from '../../assets/img/bannerLogo.png'
function Info() {
	return (
		<>
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
					<div className="md:5/12 lg:w-1/2 hidden md:block">
						<img
							src={bannerLogo}
							alt="image"
							loading="lazy"
							draggable='false'
							width=""
							height=""
							className="w-full"
						/>
					</div>
					<div className="md:7/12 lg:w-1/2">
						<h2 className="text-3xl font-bold md:text-4xl text-white">
							Hello, Im Jay. A freelance Software Engineer from Pob. Guipos Zamboanga del Sur
						</h2>
						<p className="my-8 text-gray-300">
							A freelance software engineer and student who has redefined what it means to innovate. With over 100 web
							applications under my belt, Ive woven intricate solutions to modern challenges, demonstrating an
							unwavering commitment to excellence.
						</p>
						<div className="divide-y space-y-4 divide-gray-800">
							<div className="mt-8 flex gap-4 md:items-center">
								<div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 bg-indigo-900/20">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-6 h-6 m-auto text-indigo-400">
										<path
											fillRule="evenodd"
											d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
											clipRule="evenodd"></path>
									</svg>
								</div>
								<div className="w-5/6">
									<h4 className="font-semibold text-lg text-indigo-300">Chat Anytime</h4>
									<p className="text-gray-400">Need software assistance? Chat me up and Ill code-tally help you out!</p>
								</div>
							</div>
							<div className="pt-4 flex gap-4 md:items-center">
								<div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 bg-teal-900/20">
									<FontAwesomeIcon
										icon={faUser}
										className=" w-6 h-6 m-auto text-teal-400 text-2xl text-center"
									/>
								</div>
								<div className="w-5/6">
									<h4 className="font-semibold text-lg text-teal-300">100% Human</h4>
									<p className="text-gray-400">Scammers may code chaos, but real humans program trust.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Info;
