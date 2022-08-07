import { NextResponse } from "next/server";

export const middleware = (req) => {
	if (req.nextUrl.pathname.startsWith("/login")) {
		if (req.cookies.get("accessToken")) {
			return NextResponse.redirect(new URL("/", req.url));
		}
	}

	if (req.nextUrl.pathname.startsWith("/register")) {
		if (req.cookies.get("accessToken")) {
			return NextResponse.redirect(new URL("/", req.url));
		}
	}

	if (req.nextUrl.pathname.startsWith("/profile/edit")) {
		if (!req.cookies.get("accessToken")) {
			return NextResponse.redirect(new URL("/", req.url));
		}
	}

	if (req.nextUrl.pathname.startsWith("/recipes/add")) {
		if (!req.cookies.get("accessToken")) {
			return NextResponse.redirect(new URL("/profile", req.url));
		}
	}

	if (req.nextUrl.pathname.startsWith("/recipes/mine")) {
		if (!req.cookies.get("accessToken")) {
			return NextResponse.redirect(new URL("/profile", req.url));
		}
	}

	if (req.nextUrl.pathname.startsWith("/recipes/liked")) {
		if (!req.cookies.get("accessToken")) {
			return NextResponse.redirect(new URL("/profile", req.url));
		}
	}

	if (req.nextUrl.pathname.startsWith("/recipes/saved")) {
		if (!req.cookies.get("accessToken")) {
			return NextResponse.redirect(new URL("/profile", req.url));
		}
	}
};
