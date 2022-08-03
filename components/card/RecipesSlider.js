import Link from "next/link";
import { SwiperSlide } from "swiper/react";

export default function RecipesSlider({ recipe }) {
	return (
		<SwiperSlide
			className="shadow-sm rounded-4 mb-1"
			style={{
				width: "140px",
				height: "160px",
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${recipe.photo})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<Link href="/" passHref>
				<a>
					<div className="d-flex align-items-end h-100 w-100 p-3">
						<span className="text-white fw-medium lh-sm">{recipe.name}</span>
					</div>
				</a>
			</Link>
		</SwiperSlide>
	);
}
