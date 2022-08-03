import Link from "next/link";

import { RiUser3Fill, RiHeartFill, RiBookmarkFill } from "react-icons/ri";

export default function PopularRecipes({ mb }) {
	return (
		<div className={`m-0 mb-${mb}`}>
			<div className="d-flex justify-content-between align-items-center p-0 mb-3">
				<p className="ts-20 fw-bold m-0">Popular Recipes</p>
				<Link href="/recipes/popular" passHref>
					<a>
						<p className="text-primary m-0">More info</p>
					</a>
				</Link>
			</div>
			{[...Array(5)].map((el, i) => (
				<div key={i}>
					<div className="row bg-white shadow-sm rounded-4 m-0 mb-3 p-0">
						<div className="col-auto d-flex align-items-center p-3">
							<Link href="/" passHref>
								<a>
									<div
										className="rounded-4"
										style={{
											height: "70px",
											width: "70px",
											backgroundImage: `url("/images/teriyaki.jpg")`,
											backgroundPosition: "center",
											backgroundSize: "cover",
										}}
									></div>
								</a>
							</Link>
						</div>
						<div className="col d-flex flex-column p-3">
							<Link href="/" passHref>
								<a>
									<span className="ts-16 text-secondary-3 fw-semibold">Chicken Teriyaki</span>
								</a>
							</Link>
							<div className="d-flex align-items-center gap-1 ts-14 text-secondary-2">
								<RiUser3Fill />
								<span>Irfandi</span>
							</div>
							<div className="d-flex text-secondary-2 ts-14 gap-2">
								<span className="d-flex align-items-center">
									<RiHeartFill className="text-warning me-1" />
									10
								</span>
								<span className="d-flex align-items-center">
									<RiBookmarkFill className="text-warning me-1" />
									15
								</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
