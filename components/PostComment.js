import { useState } from "react";
import { useSWRConfig } from "swr";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import recipesWrapper from "@/utils/axios/recipesWrapper";
import { getCookie } from "cookies-next";

// Components
import FormTextarea from "@/components/form/FormTextarea";
import FormToast from "@/components/form/FormToast";

// Static Constants
import { postCommentAttr } from "@/constants/formAttributes";

export default function PostComment({ id }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState(null);
	const { mutate } = useSWRConfig();

	const formOptions = { resolver: yupResolver() };
	const methods = useForm();

	const onSubmit = ({ comment }) => {
		setIsLoading(true);
		recipesWrapper
			.post("/comments", { comment, recipeId: id }, getCookie("accessToken"))
			.then((res) => {
				setIsLoading(false);
				setIsSuccess(true);
				setMessage(res.message);
			})
			.catch((err) => {
				setIsSuccess(false);
				setMessage(err?.response?.data?.message);
			})
			.finally(() => {
				setTimeout(() => {
					setIsLoading(false);
					setIsSuccess(null);
					setMessage(null);
					mutate(`/recipes/${id}`);
				}, 3000);
			});
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="m-0 p-0">
				<div className="col-auto p-0 mb-4">
					<FormToast isSuccess={isSuccess} message={message} />
					<FormTextarea input={postCommentAttr.comment} />
				</div>

				<div className="col-auto p-0 mb-3">
					<button type="submit" className="btn btn-primary rounded-4 text-white w-100" disabled={isLoading || isSuccess}>
						{isLoading && (
							<>
								<span className="spinner-border spinner-border-sm me-3"></span>
								LOADING...
							</>
						)}
						{!isLoading && !isSuccess && "POST COMMENT"}
						{!isLoading && isSuccess && "POST COMMENT SUCCESSFULLY"}
					</button>
				</div>
			</form>
		</FormProvider>
	);
}
