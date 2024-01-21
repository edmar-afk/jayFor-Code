import CommentsCard from "../../components/CommentsCard";
import { comments } from "../../components/data/Links";
function Comments() {
	return (
		<>
			<div className="p-4">
				<p className="text-white font-bold text-3xl md:text-4xl xl:text-5xl text-center py-2">
					Words from my Happy Clients
				</p>
				<p className="text-white text-center mt-4 italic">
					Hello awesome visitors! Meet Sunshine, Bliss, and Dr. Glee – all on cloud nine with satisfaction and joy.
					Cheers to success! 🌟🎉
				</p>
			</div>
			<div className="flex flex-row justify-evenly flex-wrap p-2 sm:p-8">
				{comments.map((clients) => {
					const { id, imgUrl, name, rate, feedback, satisfaction, date, icon } = clients;
					return (
						<CommentsCard
							key={id}
							imgUrl={imgUrl}
							name={name}
							rate={rate}
							feedback={feedback}
							satisfaction={satisfaction}
							date={date}
							icon={icon}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Comments;
