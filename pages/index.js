import NextLink from "next/link";

import Layout from "@/components/Layout";

export default function Home() {
	return (
		<Layout title="Homepage - Resip! App">
			<h1>Homepage</h1>
			<NextLink href="/login" passHref>
				<a>Login</a>
			</NextLink>
			<NextLink href="/register" passHref>
				<a>Register</a>
			</NextLink>
		</Layout>
	);
}
