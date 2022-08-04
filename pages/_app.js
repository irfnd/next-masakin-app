import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/utils/redux/store";
import NextNProgress from "nextjs-progressbar";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css/bundle";
import "@/styles/main.min.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextNProgress height={6} color="#f45d01" options={{ showSpinner: false }} />
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</>
	);
}
