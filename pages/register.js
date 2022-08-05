// Components
import Layout from "@/components/Layout";
import FormLayout from "@/components/form/FormLayout";
import FormTitle from "@/components/form/FormTitle";
import RegisterForm from "@/components/RegisterForm";

export default function Register() {
	// Attributes
	const registerBanner = {
		title: { text: "Let's Get Started !", size: 24 },
		desc: { text: "Create new account to access all feautures", size: 14 },
		mb: 4,
	};

	return (
		<Layout title="Register - Resip! App">
			<FormLayout bg="bg-light" backBtn>
				<FormTitle {...registerBanner} />
				<RegisterForm />
			</FormLayout>
		</Layout>
	);
}
