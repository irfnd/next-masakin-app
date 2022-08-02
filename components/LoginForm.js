import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/utils/validations";

// Icons & Images
import { BiUser, BiLockAlt } from "react-icons/bi";

// Components
import FormInput from "@/components/form/FormInput";

export default function LoginForm() {
	const formOptions = { resolver: yupResolver(LoginSchema) };
	const { register, handleSubmit, formState } = useForm(formOptions);
	const { errors, isSubmitting } = formState;

	const onSubmit = ({ email, password }) => console.log(email, password);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="m-0 p-0">
			<div className="col-auto p-0 mb-5">
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

{
	/*
		<div className="col text-end p-0 mb-4">
			<span className="text-secondary-2 fw-semibold ts-14">Forgot Password ?</span>
		</div>
	*/
}
