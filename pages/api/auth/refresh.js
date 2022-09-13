import axios from "axios";
import httpStatus from "http-status";
import { setCookie } from "cookies-next";
import { cookieOptions } from "@/utils/cookies";

export default async function login(req, res) {
	const { refreshToken } = req.body;
	try {
		if (req.method !== "POST") {
			throw Error("Method not allowed!", { cause: { code: httpStatus["METHOD_NOT_ALLOWED"] } });
		}
		const results = await axios.post(`${process.env.NEXT_PUBLIC_REST_API}/auth/refresh`, { refreshToken });
		setCookie("accessToken", results.data.results.accessToken, { req, res, ...cookieOptions });
		setCookie("refreshToken", results.data.results.refreshToken, { req, res, ...cookieOptions });
		res.json(results.data.results);
	} catch (error) {
		res
			.status(error?.response?.status || error?.cause?.code)
			.json({ message: error?.response?.data?.errors || error?.message });
	}
}
