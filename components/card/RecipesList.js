import Link from "next/link";

import { RiUser3Fill, RiHeartFill, RiBookmarkFill } from "react-icons/ri";

export default function RecipesList({ recipe }) {
	return (
		<div className="row bg-white shadow-sm rounded-4 m-0 mb-3 p-0">
			<div className="col-auto d-flex align-items-center p-3 pe-0">
				<Link href="/" passHref>
					<a>
						<div
							className="rounded-4"
							style={{
								height: "70px",
								width: "70px",
								backgroundImage: `url(${recipe.photo})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
							}}
						></div>
					</a>
				</Link>
			</div>
			<div className="col d-flex flex-column p-3">
				<span className="ts-16 text-secondary-3 fw-semibold">{recipe.name}</span>
				<div className="d-flex align-items-center gap-1 ts-14 text-secondary-2">
					<RiUser3Fill />
					<span>{recipe.author}</span>
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
			<div className="col-auto d-flex flex-column justify-content-center p-3 ps-0">
				<div className="">
					<button className="btn btn-warning rounded-circle text-white p-2 me-1">
						<RiHeartFill size={20} />
					</button>
					<button className="btn btn-warning rounded-circle text-white p-2">
						<RiBookmarkFill size={20} />
					</button>
				</div>
			</div>
		</div>
	);
}
