import Layout from "@/components/Layout";
import FormLayout from "@/components/form/FormLayout";
import FormImg from "@/components/form/FormImg";
import FormTitle from "@/components/form/FormTitle";
import FormLogin from "@/components/form/FormLogin";

export default function Login() {
	return (
		<Layout title="Login - Resip! App">
			<FormLayout bg="bg-white">
				<FormImg mb={4} />
				<FormTitle title={{ text: "Welcome !", size: 20 }} desc={{ text: "Log in to your exiting account.", size: 14 }} mb={4} />
				<FormLogin />
			</FormLayout>
		</Layout>
	);
}