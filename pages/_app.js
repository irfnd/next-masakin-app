import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/utils/redux/store";
import NextNProgress from "nextjs-progressbar";
import { hasCookie } from "cookies-next";
import { authActions } from "@/utils/redux/slices/authSlice";
import "@/utils/axios/api";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css/bundle";
import "@/styles/main.min.css";

export default function MyApp({ Component, pageProps }) {
	if (!hasCookie("accessToken")) {
		store.dispatch(authActions.reset());
	}

	return (
		<>
			<NextNProgress height={5} color="#f45d01" options={{ showSpinner: false }} />
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</>
	);
}
