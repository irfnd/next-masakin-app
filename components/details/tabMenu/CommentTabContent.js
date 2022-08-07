import useSWR from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import PostComment from "@/components/PostComment";
import CommentList from "@/components/lists/CommentList";

export default function CommentTabContent({ id }) {
	const { data, error } = useSWR(`/recipes/${id}`, recipesWrapper.get);

	if (error) return <p>Something went wrong!</p>;
	if (!data) return <p>Loading...</p>;

	return (
		<div className="mt-0 p-3">
			<PostComment />
			<p className="fw-semibold ts-16 mt-4">Comments:</p>
			{data.comments.map((comment) => (
				<CommentList key={comment.id} comment={comment} />
			))}
		</div>
	);
}
