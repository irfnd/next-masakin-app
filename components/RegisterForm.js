import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "@/utils/validations";

// Icons & Images
import { BiUser, BiEnvelope, BiPhone, BiLockAlt, BiLockOpenAlt } from "react-icons/bi";

// Components
import FormInput from "@/components/form/FormInput";

export default function RegisterForm() {
	const formOptions = { resolver: yupResolver(RegisterSchema) };
	const { register, handleSubmit, formState } = useForm(formOptions);
	const { errors } = formState;

	const onSubmit = ({ email, password }) => console.log(email, password);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="m-0 p-0">
			<div className="col-auto p-0 mb-5">
				<FormInput
					icon={<BiUser />}
					input={{ name: "name", type: "text", placeholder: "Name", bg: "bg-white" }}
					form={{ register, errors }}
					mb={3}
				/>
				<FormInput
					icon={<BiEnvelope />}
					input={{ name: "email", type: "email", placeholder: "E-Mail", bg: "bg-white" }}
					form={{ register, errors }}
					mb={3}
				/>
				<FormInput
					icon={<BiPhone />}
					input={{ name: "phoneNumber", type: "text", placeholder: "Phone Number", bg: "bg-white" }}
					form={{ register, errors }}
					mb={3}
				/>
				<FormInput
					icon={<BiLockAlt />}
					input={{ name: "password", type: "password", placeholder: "Create New Password", bg: "bg-white" }}
					form={{ register, errors }}
					mb={3}
				/>
				<FormInput
					icon={<BiLockOpenAlt />}
					input={{ name: "confirmPassword", type: "password", placeholder: "Confirm New Password", bg: "bg-white" }}
					form={{ register, errors }}
				/>
			</div>

			<div className="col-auto p-0 mb-3">
				<button type="submit" className="btn btn-primary text-white w-100">
					SIGN UP
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
	);
}
