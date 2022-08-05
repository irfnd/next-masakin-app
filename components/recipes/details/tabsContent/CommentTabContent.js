// Components
import PostComment from "@/components/PostComment";
import CommentList from "@/components/lists/CommentList";

export default function CommentTabContent({ comments }) {
	return (
		<div className="mt-0 p-3">
			<PostComment />
			<p className="fw-semibold ts-16 mt-4">Comments:</p>
			{[...Array(3)].map((el, i) => (
				<CommentList key={i} />
			))}
		</div>
	);
}
