import { useState } from "react";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { getCookie } from "cookies-next";
import useSWR from "swr";
import profileWrapper from "@/utils/axios/profileWrapper";
import { useDispatch } from "react-redux";
import { authActions } from "@/utils/redux/slices/authSlice";

// Components
import FormPhotoProfile from "@/components/form/FormPhotoProfile";
import FormToast from "@/components/form/FormToast";

export default function EditPhotoProfile() {
	const { data, errors } = useSWR("/profile", (url) => profileWrapper.get(url, getCookie("accessToken")));

	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState(null);

	const methods = useForm();
	const router = useRouter();
	const dispatch = useDispatch();

	const onSubmit = ({ photo }) => {
		const formdata = new FormData();
		formdata.append("photo", photo ? photo[0] : "");

		setIsLoading(true);
		if (!photo) {
			setIsSuccess(false);
			setMessage("Select your photo!");
			setTimeout(() => {
				setIsLoading(false);
				setIsSuccess(null);
				setMessage(null);
			}, 3000);
		} else {
			profileWrapper
				.postPhoto("/profile/photo", formdata, getCookie("accessToken"))
				.then((res) => {
					setIsLoading(false);
					setIsSuccess(true);
					setMessage(res.message);
					const { accessToken, refreshToken, ...newProfile } = res.results;
					dispatch(authActions.update(newProfile));
					setTimeout(() => router.push("/profile"), 3500);
				})
				.catch((err) => {
					setIsSuccess(false);
					setMessage(err?.response?.data?.message);
					setTimeout(() => {
						setIsLoading(false);
						setIsSuccess(null);
						setMessage(null);
					}, 3000);
				});
		}
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="m-0 p-0 mt-4">
				<div className="col p-0 mb-5">
					<FormToast isSuccess={isSuccess} message={message} />
					<FormPhotoProfile
						input={{ name: "photo" }}
						isLoading={isLoading || isSuccess}
						setIsLoading={setIsLoading}
						setIsSuccess={setIsSuccess}
						setMessage={setMessage}
						photo={data.photo}
					/>
				</div>

				<div className="col-auto p-0 mb-3">
					<button
						type="submit"
						className="btn btn-primary rounded-4 text-white w-100"
						disabled={isLoading || isSuccess}
					>
						{isLoading && (
							<>
								<span className="spinner-border spinner-border-sm me-3"></span>
								LOADING...
							</>
						)}
						{!isLoading && !isSuccess && "SAVE"}
						{!isLoading && isSuccess && "UPLOADED SUCCESSFULLY"}
					</button>
				</div>
			</form>
		</FormProvider>
	);
}
