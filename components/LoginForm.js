import Link from "next/link";

// Icons & Images
import { BiUser, BiLockAlt } from "react-icons/bi";

// Components
import FormInput from "@/components/form/FormInput";

export default function LoginForm() {
	return (
		<>
			<div className="col-auto p-0 mb-5">
				<FormInput icon={<BiUser />} input={{ type: "email", placeholder: "examplexxx@gmail.com", bg: "bg-light" }} mb={3} />
				<FormInput icon={<BiLockAlt />} input={{ type: "password", placeholder: "Password", bg: "bg-light" }} />
			</div>

			{/* <div className="col text-end p-0 mb-4">
							<span className="text-secondary-2 fw-semibold ts-14">Forgot Password ?</span>
						</div> */}

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
		</>
	);
}
