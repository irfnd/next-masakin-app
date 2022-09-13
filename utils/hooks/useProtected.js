import { hasCookie } from "cookies-next";

export default function useProtected(req, isLogin, to) {
	if (isLogin) {
		if (hasCookie("accessToken", { req })) {
			return { props: {} };
		}
		return { redirect: { destination: to, permanent: true } };
	} else {
		if (!hasCookie("accessToken", { req })) {
			return { props: {} };
		}
		return { redirect: { destination: to, permanent: true } };
	}
}
