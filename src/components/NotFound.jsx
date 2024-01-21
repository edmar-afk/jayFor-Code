/* eslint-disable react/no-unescaped-entities */
import image from "../assets/404.png";
import Gradient from "./Gradient";
import { Link } from "react-router-dom";
function NotFound() {
	return (
		<>
			<Gradient />
			<div className="mt-24 mb-32">
				<section className="">
					<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
						<div className="mx-auto max-w-screen-sm text-center">
							<img
								src={image}
								width="300"
								className="mx-auto"
								alt=""
							/>
							<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-green-500">404</h1>
							<p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Something's missing.</p>
							<p className="mb-4 text-lg font-light text-gray-400">
								Apologies, but this page is presently inaccessible as I am engrossed in the orchestration of API
								assimilation within the Django framework.
							</p>
							<Link to={'/'} className="text-purple-500 font-bold hover:text-purple-200 duration-300">Back to Home</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default NotFound;
