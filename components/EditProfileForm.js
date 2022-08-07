import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { authActions } from "@/utils/redux/slices/authSlice";

// Icons & Images
import { BiImageAdd, BiUser, BiEnvelope, BiPhone, BiLockAlt, BiLockOpenAlt } from "react-icons/bi";

// Components
import FormInput from "@/components/form/FormInput";
import FormToast from "@/components/form/FormToast";

// Static Constants
import { editProfileAttr } from "@/constants/formAttributes";

export default function EditProfileForm() {
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState(null);

	const formOptions = { resolver: yupResolver() };
	const methods = useForm(formOptions);

	const router = useRouter();
	const dispatch = useDispatch();

	const onSubmit = (data) => console.log(data);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="m-0 p-0 mt-4">
				<div className="col p-0 mb-5">
					<FormToast isSuccess={isSuccess} message={message} />
					<FormInput icon={<BiUser />} input={editProfileAttr.name} mb={3} />
					<FormInput icon={<BiEnvelope />} input={editProfileAttr.email} mb={3} />
					<FormInput icon={<BiPhone />} input={editProfileAttr.phoneNumber} mb={3} />
					<FormInput icon={<BiLockAlt />} input={editProfileAttr.password} mb={3} />
					<FormInput icon={<BiLockOpenAlt />} input={editProfileAttr.confirmPassword} />
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
