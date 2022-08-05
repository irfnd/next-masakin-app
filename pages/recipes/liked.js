// Components
import Layout from "@/components/Layout";
import BackBtn from "@/components/BackBtn";
import PopularList from "@/components/recipes/popularRecipes/List";

export default function Liked() {
	return (
		<Layout title="Popular Recipes - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-home mw-mobile p-4 pb-5">
					<div className="d-flex flex-column w-100">
						<BackBtn />
						<span className="text-center text-primary ts-20 fw-bold w-100 py-1 mb-4">Liked Recipes</span>
						<PopularList />
					</div>
				</div>
			</div>
		</Layout>
	);
}
