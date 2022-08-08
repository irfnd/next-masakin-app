import useSWR, { useSWRConfig } from "swr";
import { getCookie, hasCookie } from "cookies-next";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Icons + Images
import { RiHeartFill, RiBookmarkFill } from "react-icons/ri";

// Components
import BackBtn from "@/components/BackBtn";

export default function RecipePhoto({ id }) {
	const token = getCookie("accessToken");
	const { mutate: checked } = useSWRConfig();
	const { data: recipe } = useSWR(`/recipes/${id}`, recipesWrapper.get);
	const { data: check, mutate } = useSWR(`/recipes/check/${id}`, (url) => recipesWrapper.check(url, token));

	// Attributes
	const photoUrl = recipe.photo ? `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url("${recipe.photo}")` : "";
	const photoStyle = { height: "50%", backgroundImage: photoUrl, backgroundSize: "cover" };
	const btnNotActive = `btn btn-outline-warning btn-outline-warning-text rounded-circle p-2`;
	const btnActive = `btn btn-warning rounded-circle text-white p-2`;

	return (
		<div className="d-flex flex-column justify-content-center bg-primary align-items-center gap-3 w-100 px-4 py-5" style={photoStyle}>
			<div className="position-relative d-flex justify-content-between align-items-end pb-2 mb-5 w-100 h-100">
				<BackBtn style={{ top: 0 }} color="text-white" />
				<div className="d-flex flex-column gap-2 w-50">
					<span className="text-white ts-30 w-100 lh-2 fw-bold">{recipe.name}</span>
					<span className="text-white ts-14 fw-light">By {recipe.user.name}</span>
				</div>

				{hasCookie("accessToken") && (
					<div className="d-flex gap-2">
						<button
							className={`${check && check.liked ? btnActive : btnNotActive} me-1`}
							onClick={async () => {
								if (check.liked) {
									await recipesWrapper.unlikedOrUnsaved(`/recipes/liked/${id}`, token);
								} else {
									await recipesWrapper.likedOrSaved(`/recipes/liked/${id}`, token);
								}
								checked(`/recipes/${id}`);
								mutate();
							}}
						>
							<RiHeartFill size={24} />
						</button>
						<button
							className={`${check && check.saved ? btnActive : btnNotActive}`}
							onClick={async () => {
								if (check.saved) {
									await recipesWrapper.unlikedOrUnsaved(`/recipes/saved/${id}`, token);
								} else {
									await recipesWrapper.likedOrSaved(`/recipes/saved/${id}`, token);
								}
								checked(`/recipes/${id}`);
								mutate();
							}}
						>
							<RiBookmarkFill size={24} />
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
