import Link from "next/link";

// Icons & Images
import { BiUser, BiEnvelope, BiPhone, BiLockAlt, BiLockOpenAlt } from "react-icons/bi";

// Components
import FormInput from "@/components/form/FormInput";

export default function RegisterForm() {
	return (
		<>
			<div className="col-auto p-0 mb-5">
				<FormInput icon={<BiUser />} input={{ type: "text", placeholder: "Name", bg: "bg-white" }} mb={3} />
				<FormInput icon={<BiEnvelope />} input={{ type: "email", placeholder: "E-Mail", bg: "bg-white" }} mb={3} />
				<FormInput icon={<BiPhone />} input={{ type: "text", placeholder: "Phone Number", bg: "bg-white" }} mb={3} />
				<FormInput icon={<BiLockAlt />} input={{ type: "password", placeholder: "Create New Password", bg: "bg-white" }} mb={3} />
				<FormInput icon={<BiLockOpenAlt />} input={{ type: "password", placeholder: "Confirm New Password", bg: "bg-white" }} />
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
		</>
	);
}
