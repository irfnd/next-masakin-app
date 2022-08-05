import axios from "axios";
import httpStatus from "http-status";

export default async function login(req, res) {
	const { name, email, phoneNumber, password } = req.body;
	try {
		if (req.method !== "POST") {
			throw Error("Method not allowed!", { cause: { code: httpStatus["METHOD_NOT_ALLOWED"] } });
		}
		const results = await axios.post(`${process.env.REST_API}/auth/register`, { name, email, phoneNumber, password });
		res.json(results.data.results);
	} catch (error) {
		res.status(error?.response?.status || error?.cause?.code).json({ message: error?.response?.data?.details || error?.message });
	}
}
