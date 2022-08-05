import Link from "next/link";

// Icons + Images
import { RiUser3Fill, RiHeartFill, RiBookmarkFill } from "react-icons/ri";

// Components
import RecipesList from "@/components/card/RecipesList";

export default function PopularRecipes() {
	return (
		<div className="m-0 mb-5">
			<div className="d-flex justify-content-between align-items-center p-0 mb-3">
				<p className="ts-20 fw-bold m-0">Popular Recipes</p>
				<Link href="/recipes/popular" passHref>
					<a className="ts-14 text-primary m-0">More info</a>
				</Link>
			</div>
			{/* {[...Array(5)].map((el, i) => (
				<RecipesList key={i} />
			))} */}
		</div>
	);
}
