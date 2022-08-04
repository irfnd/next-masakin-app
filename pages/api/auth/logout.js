import httpStatus from "http-status";
import { hasCookie, deleteCookie } from "cookies-next";

export default function logout(req, res) {
	try {
		if (req.method !== "GET") {
			throw Error("Method not allowed!", { cause: { code: httpStatus["METHOD_NOT_ALLOWED"] } });
		}

		if (!hasCookie("accessToken", { req })) {
			throw Error("You're Already Logout!", { cause: { code: httpStatus["FORBIDDEN"] } });
		}

		deleteCookie("accessToken", { req, res });
		deleteCookie("refreshToken", { req, res });
		res.json({ message: "Logout Successfully!" });
	} catch (error) {
		res.status(error?.response?.data?.code || error?.cause?.code).json({ message: error?.response?.data?.message || error?.message });
	}
}
