import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";

// Components
import FormPhotoProfile from "@/components/form/FormPhotoProfile";
import FormToast from "@/components/form/FormToast";

export default function EditPhotoProfile({ photo }) {
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState(null);

	const formOptions = { resolver: yupResolver() };
	const methods = useForm();

	const router = useRouter();
	const dispatch = useDispatch();

	const onSubmit = (data) => console.log(data);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="m-0 p-0 mt-4">
				<div className="col p-0 mb-5">
					<FormToast isSuccess={isSuccess} message={message} />
					<FormPhotoProfile input={{ name: "photo" }} photo={photo} />
				</div>

				<div className="col p-0 mb-3">
					<button type="submit" className="btn btn-primary rounded-4 text-white w-100">
						SAVE
					</button>
				</div>
			</form>
		</FormProvider>
	);
}
