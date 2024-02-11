import useCommentForm from "../hooks/homepage/useCommentForm";
import CommentsCard from "../components/CommentsCard";
import ThankYou from "../components/ThankYou";

function CommentForm() {
	const {
		name,
		rate,
		clientEmotion,
		currentDate,
		imageSrc,
		rateText,
		feedback,
		thankYou,
		handleName,
		handleRate,
		handleFeedback,
		handleSubmit,
	} = useCommentForm();

	return (
		<>
			<div className="lg:w-2/3 text-center mx-auto mb-12 mt-32 sm:mt-44 p-4 sm:p-0">
				<h1 className="text-purple-800 font-bold text-2xl md:text-4xl xl:text-5xl">
					Your Feedback Matters
					<br />
					<span className="text-white">Rate My Performance</span>
				</h1>
				<p className="mt-8 text-gray-300 italic font-semibold">
					As a dedicated software developer, I am committed to delivering high-quality solutions that exceed
					expectations. Your feedback is invaluable in helping me continuously improve and refine my skills.
				</p>
			</div>
			<div>
				<form
					className="w-full max-w-5xl my-8 mx-auto hover:shadow-xl hover:shadow-purple-400 duration-1000 p-6 sm:p-24 rounded-xl"
					onSubmit={handleSubmit}>
					<p className="text-white ml-0 sm:ml-12 font-bold">Preview:</p>
					<CommentsCard
						name={name}
						rate={rate}
						icon={clientEmotion}
						date={currentDate}
						imageSrc={imageSrc}
						rateText={rateText}
						feedback={feedback}
					/>
					<div className="flex flex-wrap -mx-3 mb-6 mt-20">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
								htmlFor="grid-first-name">
								Full Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:scale-95 duration-300"
								id="grid-first-name"
								type="text"
								value={name}
								onChange={handleName}
								placeholder="Enter Full Name..."
								required
							/>
						</div>
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
								htmlFor="grid-state">
								Rate{" "}
							</label>
							<div className="relative">
								<select
									className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:scale-95 duration-300"
									id="grid-state"
									value={rate}
									onChange={handleRate}
									required>
									<option value={1}>1 Star</option>
									<option value={2}>2 Star</option>
									<option value={3}>3 Star</option>
									<option value={4}>4 Star</option>
									<option value={5}>5 Star</option>
								</select>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label
								className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
								htmlFor="feedback">
								Feedback
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:scale-95 duration-300"
								id="feedback"
								name="comment"
								type="text"
								value={feedback}
								onChange={handleFeedback}
								placeholder="YEAAAAAAAAAAHHHH"
								required
							/>
							<p className="text-white text-xs italic">Use kind words as possible.... Or not.</p>
						</div>
					</div>
					<button
						type="submit"
						className="bg-blue-600 text-white p-3 rounded-lg">
						Submit
					</button>
				</form>
			</div>
			{thankYou && <ThankYou />}
		</>
	);
}

export default CommentForm;
