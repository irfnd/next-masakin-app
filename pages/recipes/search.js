import Link from "next/link";

import { RiHeartFill, RiBookmarkFill } from "react-icons/ri";

// Components
import Layout from "@/components/Layout";
import InputSearch from "@/components/form/InputSearch";

export default function Search() {
	return (
		<Layout title="Homepage - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-home mw-mobile pb-5">
					<div className="p-4 h-100 w-100">
						<InputSearch mb={4} />
						<div className="row bg-white shadow-sm rounded-4 m-0 mb-2 p-0">
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
								<span className="ts-18 text-secondary-3 fw-semibold">Chicken Teriyaki</span>
								<span className="ts-16 text-secondary-2">by Irfandi</span>
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
				</div>
			</div>
		</Layout>
	);
}
