import useSWR from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Icons + Images
import { RiHeartFill, RiBookmarkFill } from "react-icons/ri";

// Components
import BackBtn from "@/components/BackBtn";

export default function RecipePhoto({ id }) {
	const { data, error } = useSWR(`/recipes/${id}`, recipesWrapper.get);

	if (error) return <p>Something went wrong!</p>;
	if (!data) return <p>Loading...</p>;

	// Attributes
	const photoUrl = data.photo ? `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url("${data.photo}")` : "";
	const photoStyle = { height: "50%", backgroundImage: photoUrl, backgroundSize: "cover" };

	return (
		<div className="d-flex flex-column justify-content-center bg-primary align-items-center gap-3 w-100 px-4 py-5" style={photoStyle}>
			<div className="position-relative d-flex justify-content-between align-items-end pb-2 mb-5 w-100 h-100">
				<BackBtn style={{ top: 0 }} color="text-white" />
				<div className="d-flex flex-column gap-2 w-50">
					<span className="text-white ts-30 w-100 lh-2 fw-bold">{data.name}</span>
					<span className="text-white ts-14 fw-light">By {data.user.name}</span>
				</div>
				<div className="d-flex gap-2">
					<button className="btn btn-warning rounded-circle text-white p-2 me-1">
						<RiHeartFill size={24} />
					</button>
					<button className="btn btn-warning rounded-circle text-white p-2">
						<RiBookmarkFill size={24} />
					</button>
				</div>
			</div>
		</div>
	);
}
