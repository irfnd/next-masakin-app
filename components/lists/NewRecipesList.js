import Link from "next/link";
import useSWR from "swr";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import recipesWrapper from "@/utils/axios/recipesWrapper";

export default function NewRecipesList() {
	const { data, error } = useSWR("/recipes", (url) => recipesWrapper.getNew(url));

	return (
		<Swiper modules={[FreeMode]} spaceBetween={15} slidesPerView={"auto"} freeMode>
			{data.length > 0 ? (
				data.map((recipe) => (
					<SwiperSlide
						key={recipe.id}
						className="shadow-sm rounded-4 cursor-pointer mb-1"
						style={{
							width: "140px",
							height: "160px",
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${recipe.photo || "/images/food-placeholder.png"})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}
					>
						<Link href={`/recipes/${recipe.id}`}>
							<div className="d-flex align-items-end h-100 w-100 p-3">
								<span className="text-white fw-medium lh-sm">{recipe.name}</span>
							</div>
						</Link>
					</SwiperSlide>
				))
			) : (
				<SwiperSlide
					className="shadow-sm bg-light rounded-4 mb-1"
					style={{
						height: "160px",
						backgroundImage: `url("/images/data-empty.png")`,
						backgroundPosition: "right",
						backgroundSize: "50%",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div className="d-flex align-items-end h-100 w-75 p-3">
						<span className="text-primary fw-bold">Data not available yet.</span>
					</div>
				</SwiperSlide>
			)}
		</Swiper>
	);
}
