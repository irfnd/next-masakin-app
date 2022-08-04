import { NextResponse } from "next/server";
import { hasCookie } from "cookies-next";
import { store } from "@/utils/redux/store";
import { authActions } from "./utils/redux/slices/authSlice";

export const middleware = (req) => {
	if (!hasCookie("accessToken", { req })) {
		store.dispatch(authActions.reset());
	}

	if (req.nextUrl.pathname.startsWith("/login")) {
		if (hasCookie("accessToken", { req })) {
			return NextResponse.redirect(new URL("/", req.url));
		}
	}
};
