import { NextResponse } from "next/server";

export const middleware = (req) => {
	if (req.nextUrl.pathname.startsWith("/login")) {
		if (req.cookies.get("accessToken")) {
			return NextResponse.redirect(new URL("/", req.url));
		}
	}
};
