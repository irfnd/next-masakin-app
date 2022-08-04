import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/utils/validations";
import { useDispatch } from "react-redux";
import { authActions } from "@/utils/redux/slices/authSlice";

// Icons & Images
import { BiUser, BiLockAlt } from "react-icons/bi";

// Components
import FormInput from "@/components/form/FormInput";
import FormToast from "@/components/form/FormToast";

export default function LoginForm() {
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState(null);

	const formOptions = { resolver: yupResolver(LoginSchema) };
	const { register, handleSubmit, formState } = useForm(formOptions);
	const { errors } = formState;

	const router = useRouter();
	const dispatch = useDispatch();

	const onSubmit = ({ email, password }) => {
		dispatch(authActions.login({ email, password }))
			.unwrap()
			.then(() => {
				setIsSuccess(true);
				setMessage("Login Successfully!");
				setTimeout(() => router.push("/"), 3500);
			})
			.catch((err) => {
				setIsSuccess(false);
				setMessage(err);
			})
			.finally(() => {
				setTimeout(() => {
					setIsSuccess(null);
					setMessage(null);
				}, 3500);
			});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="m-0 p-0">
			<div className="col-auto p-0 mb-5">
				<FormToast isSuccess={isSuccess} message={message} />
				<FormInput
					icon={<BiUser />}
					input={{ name: "email", type: "email", placeholder: "examplexxx@gmail.com", bg: "bg-light" }}
					form={{ register, errors }}
					mb={3}
				/>
				<FormInput
					icon={<BiLockAlt />}
					input={{ name: "password", type: "password", placeholder: "Password", bg: "bg-light" }}
					form={{ register, errors }}
				/>
			</div>

			<div className="col-auto p-0 mb-3">
				<button type="submit" className="btn btn-primary text-white w-100">
					LOG IN
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
	);
}
