import useProtected from "@/utils/hooks/useProtected";

// Components
import Layout from "@/components/Layout";
import FormLayout from "@/components/form/FormLayout";
import FormImg from "@/components/form/FormImg";
import FormTitle from "@/components/form/FormTitle";
import LoginForm from "@/components/LoginForm";

export default function Login() {
	// Attributes
	const loginBanner = {
		title: { text: "Welcome !", size: 20 },
		desc: { text: "Log in to your exiting account.", size: 14 },
		mb: 4,
	};

	return (
		<Layout title="Login - Resip! App">
			<FormLayout bg="bg-white">
				<FormImg mb={4} />
				<FormTitle {...loginBanner} />
				<LoginForm />
			</FormLayout>
		</Layout>
	);
}

export const getServerSideProps = ({ req }) => useProtected(req, false, "/");
