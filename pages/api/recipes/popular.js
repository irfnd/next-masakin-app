import axios from "axios";
import httpStatus from "http-status";

export default async function popularRecipes(req, res) {
	try {
		if (req.method !== "GET") {
			throw Error("Method not allowed!", { cause: { code: httpStatus["METHOD_NOT_ALLOWED"] } });
		}
		const results = await axios.get(`${process.env.REST_API}/recipes/popular`);
		res.json(results.data.results);
	} catch (error) {
		res.status(error?.response?.status || error?.cause?.code).json({ message: error?.response?.data?.errors || error?.message });
	}
}
