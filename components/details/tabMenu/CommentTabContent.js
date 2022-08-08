import useSWR from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";
import { hasCookie } from "cookies-next";

// Components
import PostComment from "@/components/PostComment";
import CommentList from "@/components/lists/CommentList";

export default function CommentTabContent({ id }) {
	const token = hasCookie("accessToken");
	const { data } = useSWR(`/recipes/${id}`, recipesWrapper.get);

	return (
		<div className="mt-0 p-3">
			{token && <PostComment id={id} />}
			<p className={`fw-semibold ts-16 ${token && "mt-4"}`}>Comments : </p>
			{data.comments.map((comment) => (
				<CommentList key={comment.id} comment={comment} />
			))}
		</div>
	);
}
