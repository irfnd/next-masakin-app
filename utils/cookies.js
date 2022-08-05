import parse from "parse-duration";

export const cookieOptions = {
	maxAge: parse(process.env.COOKIE_EXPIRE) / 1000,
};
