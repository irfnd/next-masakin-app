import Link from "next/link";
import { hasCookie } from "cookies-next";

// Icons + Images
import { RiUser3Fill, RiHeartFill, RiBookmarkFill } from "react-icons/ri";

// Components
import LikedSavedBtn from "@/components/button/LikedSavedBtn";

export default function RecipesList({ recipe, type, withBtn = false }) {
	// Attributes
	const photo = `url(${recipe.photo || "/images/food-placeholder.png"})`;
	const photoStyle = {
		height: 70,
		width: 70,
		backgroundImage: photo,
		backgroundPosition: "center",
		backgroundSize: "cover",
	};

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

				{withBtn && hasCookie("accessToken") && <LikedSavedBtn id={recipe.id} type={type} />}
			</div>
		</>
	);
}
