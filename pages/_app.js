import NextNProgress from "nextjs-progressbar";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.min.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextNProgress height={6} color="#f45d01" options={{ showSpinner: false }} />
			<Component {...pageProps} />
		</>
	);
}
