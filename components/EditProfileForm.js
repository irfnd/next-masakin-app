import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getCookie } from "cookies-next";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateProfileSchema } from "@/utils/validations";
import { authActions } from "@/utils/redux/slices/authSlice";
import profileWrapper from "@/utils/axios/profileWrapper";
import useSWR from "swr";

// Icons & Images
import { BiUser, BiEnvelope, BiPhone } from "react-icons/bi";

// Components
import FormInput from "@/components/form/FormInput";
import FormToast from "@/components/form/FormToast";

// Static Constants
import { editProfileAttr } from "@/constants/formAttributes";

export default function EditProfileForm() {
	const { data, errors } = useSWR("/profile", (url) => profileWrapper.get(url, getCookie("accessToken")));

	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState(null);

	const checkedData = { name: data.name, email: data.email, phoneNumber: data.phoneNumber };
	const formOptions = { resolver: yupResolver(UpdateProfileSchema), defaultValues: checkedData };
	const methods = useForm(formOptions);

	const router = useRouter();
	const dispatch = useDispatch();

	const onSubmit = ({ name, email, phoneNumber }) => {
		setIsLoading(true);
		profileWrapper
			.update("/profile", { name, email, phoneNumber }, getCookie("accessToken"))
			.then((res) => {
				setIsLoading(false);
				setIsSuccess(true);
				setMessage(res.message);
				const newProfile = { name: res.results.name, email: res.results.email, phoneNumber: res.results.phoneNumber };
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
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="m-0 p-0 mt-4">
				<div className="col p-0 mb-5">
					<FormToast isSuccess={isSuccess} message={message} />
					<FormInput icon={<BiUser />} input={editProfileAttr.name} mb={3} />
					<FormInput icon={<BiEnvelope />} input={editProfileAttr.email} mb={3} />
					<FormInput icon={<BiPhone />} input={editProfileAttr.phoneNumber} mb={5} />
				</div>

				<div className="col p-0 mb-3">
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
						{!isLoading && isSuccess && "UPDATED SUCCESSFULLY"}
					</button>
				</div>
			</form>
		</FormProvider>
	);
}
