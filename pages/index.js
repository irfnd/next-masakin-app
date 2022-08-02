// Components
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<Layout title="Homepage - Resip! App">
			<div className="d-flex justify-content-center vh-100">
				<Navbar />
			</div>
		</Layout>
	);
}

{
	/* <h1>Homepage</h1>
		<NextLink href="/login" passHref>
			<a>Login</a>
		</NextLink>
		<NextLink href="/register" passHref>
			<a>Register</a>
		</NextLink> */
}
