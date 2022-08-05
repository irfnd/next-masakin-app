import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Components
import FormTextarea from "@/components/form/FormTextarea";
import FormToast from "@/components/form/FormToast";

// Static Constants
import { postCommentAttr } from "@/constants/formAttributes";

export default function PostComment() {
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState(null);

	const formOptions = { resolver: yupResolver() };
	const methods = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="m-0 p-0">
				<div className="col-auto p-0 mb-4">
					<FormToast isSuccess={isSuccess} message={message} />
					<FormTextarea input={postCommentAttr.comment} />
				</div>

				<div className="col-auto p-0 mb-3">
					<button type="submit" className="btn btn-primary rounded-4 text-white w-100">
						POST COMMENT
					</button>
				</div>
			</form>
		</FormProvider>
	);
}
