// Components
import Layout from "@/components/Layout";
import RecipePhoto from "@/components/recipes/details/RecipePhoto";
import DetailMenu from "@/components/recipes/details/DetailMenu";

export default function Detail() {
	return (
		<Layout title="Profile - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-white mw-mobile pb-5">
					<RecipePhoto />
					<DetailMenu />
				</div>
			</div>
		</Layout>
	);
}
