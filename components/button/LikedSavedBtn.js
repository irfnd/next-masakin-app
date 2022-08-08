import useSWR, { useSWRConfig } from "swr";
import { getCookie } from "cookies-next";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Icons + Images
import { RiHeartFill, RiBookmarkFill } from "react-icons/ri";

export default function LikedSavedBtn({ id, type }) {
	const token = getCookie("accessToken");
	const { mutate: checked } = useSWRConfig();
	const { data, mutate } = useSWR(`/recipes/check/${id}`, (url) => recipesWrapper.check(url, token));

	// Attributes
	const btnNotActive = `btn btn-outline-warning btn-outline-warning-text rounded-circle p-2`;
	const btnActive = `btn btn-warning rounded-circle text-white p-2`;

	if (type === "detail") {
		return (
			<div className="d-flex gap-2">
				<button
					className={`${data && data.liked ? btnActive : btnNotActive} me-1`}
					onClick={async () => {
						if (data.liked) {
							await recipesWrapper.unlikedOrUnsaved(`/recipes/liked/${id}`, token);
						} else {
							await recipesWrapper.likedOrSaved(`/recipes/liked/${id}`, token);
						}
						mutate();
						checked(`/recipes/${id}`);
					}}
				>
					<RiHeartFill size={24} />
				</button>
				<button
					className={`${data && data.saved ? btnActive : btnNotActive}`}
					onClick={async () => {
						if (data.saved) {
							await recipesWrapper.unlikedOrUnsaved(`/recipes/saved/${id}`, token);
						} else {
							await recipesWrapper.likedOrSaved(`/recipes/saved/${id}`, token);
						}
						mutate();
						checked(`/recipes/${id}`);
					}}
				>
					<RiBookmarkFill size={24} />
				</button>
			</div>
		);
	} else {
		return (
			<div className="col-auto d-flex flex-column justify-content-center p-3 ps-0">
				<div>
					<button
						className={`${data && data.liked ? btnActive : btnNotActive} me-1`}
						onClick={async () => {
							if (data.liked) {
								await recipesWrapper.unlikedOrUnsaved(`/recipes/liked/${id}`, token);
							} else {
								await recipesWrapper.likedOrSaved(`/recipes/liked/${id}`, token);
							}
							mutate();
							checked(type === "search" ? "/recipes" : `/recipes/${type}`);
						}}
					>
						<RiHeartFill size={22} />
					</button>
					<button
						className={`${data && data.saved ? btnActive : btnNotActive}`}
						onClick={async () => {
							if (data.saved) {
								await recipesWrapper.unlikedOrUnsaved(`/recipes/saved/${id}`, token);
							} else {
								await recipesWrapper.likedOrSaved(`/recipes/saved/${id}`, token);
							}
							mutate();
							checked(type === "search" ? "/recipes" : `/recipes/${type}`);
						}}
					>
						<RiBookmarkFill size={22} />
					</button>
				</div>
			</div>
		);
	}
}
