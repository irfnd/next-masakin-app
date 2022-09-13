import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "@/utils/validations";
import { useDispatch } from "react-redux";
import { authActions } from "@/utils/redux/slices/authSlice";

// Icons & Images
import { BiUser, BiEnvelope, BiPhone, BiLockAlt, BiLockOpenAlt } from "react-icons/bi";

// Components
import FormInput from "@/components/form/FormInput";
import FormToast from "@/components/form/FormToast";

// Static Constants
import { registerAttr } from "@/constants/formAttributes";

export default function RegisterForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState(null);

	const formOptions = { resolver: yupResolver(RegisterSchema) };
	const methods = useForm(formOptions);

	const router = useRouter();
	const dispatch = useDispatch();

	const onSubmit = ({ name, email, phoneNumber, password }) => {
		setIsLoading(true);
		dispatch(authActions.register({ name, email, phoneNumber, password }))
			.unwrap()
			.then(() => {
				setIsLoading(false);
				setIsSuccess(true);
				setMessage("Register Successfully!");
				setTimeout(() => router.push("/login"), 3500);
			})
			.catch((err) => {
				setIsSuccess(false);
				setMessage(err);
				setTimeout(() => {
					setIsLoading(false);
					setIsSuccess(null);
					setMessage(null);
				}, 3000);
			});
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="m-0 p-0">
				<div className="col-auto p-0 mb-5">
					<FormToast isSuccess={isSuccess} message={message} />
					<FormInput icon={<BiUser />} input={registerAttr.name} mb={3} />
					<FormInput icon={<BiEnvelope />} input={registerAttr.email} mb={3} />
					<FormInput icon={<BiPhone />} input={registerAttr.phoneNumber} mb={3} />
					<FormInput icon={<BiLockAlt />} input={registerAttr.password} mb={3} />
					<FormInput icon={<BiLockOpenAlt />} input={registerAttr.confirmPassword} />
				</div>

				<div className="col-auto p-0 mb-3">
					<button
						type="submit"
						className="btn btn-primary text-white rounded-4 w-100"
						disabled={isLoading || isSuccess}
					>
						{isLoading && (
							<>
								<span className="spinner-border spinner-border-sm me-3"></span>
								LOADING...
							</>
						)}
						{!isLoading && !isSuccess && "SIGN UP"}
						{!isLoading && isSuccess && "YOU ARE REGISTERED"}
					</button>
				</div>

				<div className="col-auto p-0 text-center">
					<span className="text-secondary-2 ts-14">
						Already have account?{" "}
						<Link href="/login" passHref>
							<a className="fw-bold">Log in Here</a>
						</Link>
					</span>
				</div>
			</form>
		</FormProvider>
	);
}
