import Link from "next/link";
import useSWR, { useSWRConfig } from "swr";
import { getCookie, hasCookie } from "cookies-next";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Icons + Images
import { RiUser3Fill, RiHeartFill, RiBookmarkFill } from "react-icons/ri";

export default function RecipesList({ recipe, type, withBtn = false }) {
	const token = getCookie("accessToken");
	const { mutate: checked } = useSWRConfig();
	const { data, mutate } = useSWR(
		() => "/recipes/check/" + recipe.id,
		(url) => recipesWrapper.check(url, token)
	);

	// Attributes
	const photo = `url(${recipe.photo || "/images/food-placeholder.png"})`;
	const photoStyle = {
		height: 70,
		width: 70,
		backgroundImage: photo,
		backgroundPosition: "center",
		backgroundSize: "cover",
	};
	const btnNotActive = `btn btn-outline-warning btn-outline-warning-text rounded-circle p-2`;
	const btnActive = `btn btn-warning rounded-circle text-white p-2`;

	return (
		<>
			<div className="row bg-white shadow-sm rounded-4 m-0 mb-3 p-0">
				<Link href={`/recipes/${recipe.id}`}>
					<div className="col-auto d-flex align-items-center p-3 pe-0">
						<div className="rounded-4 cursor-pointer" style={photoStyle}></div>
					</div>
				</Link>
				<Link href={`/recipes/${recipe.id}`}>
					<div className="col d-flex flex-column cursor-pointer p-3">
						<span className="ts-16 text-secondary-3 fw-semibold">{recipe.name}</span>
						<div className="d-flex align-items-center gap-1 ts-14 text-secondary-2">
							<RiUser3Fill />
							<span>{recipe.user?.name.split(" ")[0] || "No Author"}</span>
						</div>
						<div className="d-flex text-secondary-2 ts-14 gap-2">
							<span className="d-flex align-items-center">
								<RiHeartFill className="text-warning me-1" />
								{recipe.likedCount}
							</span>
							<span className="d-flex align-items-center">
								<RiBookmarkFill className="text-warning me-1" />
								{recipe.savedCount}
							</span>
						</div>
					</div>
				</Link>

				{withBtn && hasCookie("accessToken") && (
					<div className="col-auto d-flex flex-column justify-content-center p-3 ps-0">
						<div>
							<button
								className={`${data && data.liked ? btnActive : btnNotActive} me-1`}
								onClick={async () => {
									if (data.liked) {
										await recipesWrapper.unlikedOrUnsaved(`/recipes/liked/${recipe.id}`, token);
									} else {
										await recipesWrapper.likedOrSaved(`/recipes/liked/${recipe.id}`, token);
									}
									checked(`/recipes/${type}`);
									mutate();
								}}
							>
								<RiHeartFill size={22} />
							</button>
							<button
								className={`${data && data.saved ? btnActive : btnNotActive}`}
								onClick={async () => {
									if (data.saved) {
										await recipesWrapper.unlikedOrUnsaved(`/recipes/saved/${recipe.id}`, token);
									} else {
										await recipesWrapper.likedOrSaved(`/recipes/saved/${recipe.id}`, token);
									}
									checked(`/recipes/${type}`);
									mutate();
								}}
							>
								<RiBookmarkFill size={22} />
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
