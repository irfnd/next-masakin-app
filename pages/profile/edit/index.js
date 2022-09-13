import Link from "next/link";
import useProtected from "@/utils/hooks/useProtected";

// Icons + Images
import { RiUserSettingsLine, RiImageEditFill, RiArrowRightSLine } from "react-icons/ri";

// Components
import Layout from "@/components/Layout";
import BackBtn from "@/components/BackBtn";

export default function ProfileEdit() {
	return (
		<Layout title="Edit Profile - Masakin App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-home mw-mobile px-4 py-5">
					<div className="d-flex flex-column h-100 w-100">
						<BackBtn />
						<span className="text-center text-primary ts-20 fw-bold w-100 py-1 mb-5">Edit Profile</span>
						<div className="d-flex flex-column align-items-center w-100 mw-profile gap-3">
							<Link href="/profile/edit/data">
								<div className="d-flex align-items-center bg-white rounded-4 shadow-sm cursor-pointer w-100 gap-3 p-3 py-4 fw-semibold">
									<RiUserSettingsLine className="text-warning" size={28} />
									Edit Profile Data
									<RiArrowRightSLine className="text-warning ms-auto" size={25} />
								</div>
							</Link>
							<Link href="/profile/edit/photo">
								<div className="d-flex align-items-center bg-white rounded-4 shadow-sm cursor-pointer w-100 gap-3 p-3 py-4 fw-semibold">
									<RiImageEditFill className="text-warning" size={28} />
									Change Profile Photo
									<RiArrowRightSLine className="text-warning ms-auto" size={25} />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export const getServerSideProps = ({ req }) => useProtected(req, true, "/profile");
