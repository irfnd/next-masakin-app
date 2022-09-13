import useSWR from "swr";
import { hasCookie } from "cookies-next";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import BackBtn from "@/components/BackBtn";
import LikedSavedBtn from "@/components/button/LikedSavedBtn";

export default function RecipePhoto({ id }) {
	const { data: recipe } = useSWR(`/recipes/${id}`, recipesWrapper.get);

	// Attributes
	const photoUrl = recipe.photo ? `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url("${recipe.photo}")` : "";
	const photoStyle = { height: "50%", backgroundImage: photoUrl, backgroundSize: "cover" };

	return (
		<div
			className="d-flex flex-column justify-content-center bg-primary align-items-center gap-3 w-100 px-4 py-5"
			style={photoStyle}
		>
			<div className="position-relative d-flex justify-content-between align-items-end pb-2 mb-5 w-100 h-100">
				<BackBtn style={{ top: 0 }} color="text-white" />
				<div className="d-flex flex-column gap-2 w-50">
					<span className="text-white ts-30 w-100 lh-2 fw-bold">{recipe.name}</span>
					<span className="text-white ts-14 fw-light">By {recipe.user.name}</span>
				</div>

				{hasCookie("accessToken") && <LikedSavedBtn id={id} type="detail" />}
			</div>
		</div>
	);
}
