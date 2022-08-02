import Head from "next/head";

export default function Layout({ title, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>

			<main>{children}</main>
		</div>
	);
}
