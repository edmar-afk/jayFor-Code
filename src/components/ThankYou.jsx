/* eslint-disable react/no-unescaped-entities */ import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function ThankYou() {
	return (
		<>
			<div
				className="relative z-10"
				aria-labelledby="modal-title"
				role="dialog"
				aria-modal="true">
				<div className="fixed inset-0 bg-gray-950 bg-opacity-95 transition-opacity"></div>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
							<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
								<div className="sm:flex sm:items-start">
									<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
										<FontAwesomeIcon
											icon={faSmileBeam}
											className="text-green-700 w-8 h-8"
										/>
									</div>
									<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
										<h3
											className="text-base font-bold leading-6 text-gray-900"
											id="modal-title">
											Thank You!
										</h3>
										<div className="mt-2">
											<p className="text-sm text-gray-900 font-semibold">
												Your insights help me enhance the user experience and build better software solutions. I
												genuinely appreciate your contribution to my development process.
											</p>
											<p className="text-xs text-orange-600 font-bold mt-8">
												By Clicking button, you'll be redirected to my portfolio homepage
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
								<Link
									to={"/"}
									className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">
									You're Welcome
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ThankYou;
