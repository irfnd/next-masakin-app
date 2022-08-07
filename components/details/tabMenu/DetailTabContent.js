import useSWR from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

export default function DetailTabContent({ id }) {
	const { data, error } = useSWR(`/recipes/${id}`, recipesWrapper.get);

	if (error) return <p>Something went wrong!</p>;
	if (!data) return <p>Loading...</p>;

	return (
		<div className="px-3">
			<p className="fw-semibold ts-16">Description</p>
			<p>{data.shortDesc || "No Description"}</p>

			<p className="fw-semibold ts-16">Ingredients</p>
			<p>{data.ingredients ? null : "No Ingredients"}</p>
			<ul className="text-secondary-3 ps-4">
				{data.ingredients &&
					data.ingredients.map((item, i) => (
						<li key={i} className="mb-2">
							{item}
						</li>
					))}
			</ul>
		</div>
	);
}
