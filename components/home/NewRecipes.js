import Link from "next/link";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NewRecipes({ mb }) {
	return (
		<div className={`m-0 mb-${mb}`}>
			<p className="ts-20 fw-bold p-0 mb-3">New Recipes</p>
			<Swiper modules={[FreeMode]} spaceBetween={15} slidesPerView={"auto"} freeMode>
				{[...Array(5)].map((el, i) => (
					<SwiperSlide
						key={i}
						className="shadow-sm rounded-4 mb-1"
						style={{
							width: "140px",
							height: "160px",
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url("/images/teriyaki.jpg")`,
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}
					>
						<Link href="/" passHref>
							<a>
								<div className="d-flex align-items-end h-100 w-100 p-3">
									<span className="text-white fw-medium lh-sm">Banana Lemonilo</span>
								</div>
							</a>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
