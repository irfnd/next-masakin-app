import { NextResponse } from "next/server";

export const middleware = (req) => {
	if (req.cookies.get("accessToken")) {
		return NextResponse.redirect(new URL("/", req.url));
	}
};

export const config = {
	matcher: "/login",
};
