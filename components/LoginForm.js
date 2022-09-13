import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/utils/validations";
import { useDispatch } from "react-redux";
import { authActions } from "@/utils/redux/slices/authSlice";

// Icons & Images
import { BiUser, BiLockAlt } from "react-icons/bi";

// Components
import FormInput from "@/components/form/FormInput";
import FormToast from "@/components/form/FormToast";

// Static Constants
import { loginAttr } from "@/constants/formAttributes";

export default function LoginForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState(null);

	const formOptions = { resolver: yupResolver(LoginSchema) };
	const methods = useForm(formOptions);

	const router = useRouter();
	const dispatch = useDispatch();

	const onSubmit = ({ email, password }) => {
		setIsLoading(true);
		dispatch(authActions.login({ email, password }))
			.unwrap()
			.then(() => {
				setIsLoading(false);
				setIsSuccess(true);
				setMessage("Login Successfully!");
				setTimeout(() => router.push("/"), 3500);
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
					<FormInput icon={<BiUser />} input={loginAttr.email} mb={3} />
					<FormInput icon={<BiLockAlt />} input={loginAttr.password} />
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
						{!isLoading && !isSuccess && "LOG IN"}
						{!isLoading && isSuccess && "YOU ARE LOGGED IN"}
					</button>
				</div>

				<div className="col-auto p-0 text-center">
					<span className="text-secondary-2 ts-14">
						Don&apos;t have an account?{" "}
						<Link href="/register" passHref>
							<a className="fw-bold">Sign Up</a>
						</Link>
					</span>
				</div>
			</form>
		</FormProvider>
	);
}
