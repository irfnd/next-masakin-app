import Image from "next/image";

// Icons + Images
import profile from "@/public/images/profile-placeholder.png";

// Components
import Layout from "@/components/Layout";
import Menu from "@/components/profile/Menu";
import Navbar from "@/components/Navbar";

export default function Profile() {
	return (
		<Layout title="Profile - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-white mw-mobile pb-5">
					<div className="d-flex flex-column justify-content-center align-items-center bg-primary gap-2 h-50 w-100 p-4 pb-5">
						<div>
							<Image src={profile} alt="Profile Photo" height={100} width={100} />
						</div>
						<span className="text-white ts-18 fw-semibold">Guest</span>
					</div>
					<Menu isLogin={false} />
					<Navbar />
				</div>
			</div>
		</Layout>
	);
}
