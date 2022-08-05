import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "@/utils/redux/slices/authSlice";

// Icons + Images
import { RiUser3Line, RiAwardLine, RiBookmarkLine, RiHeartLine, RiLogoutBoxLine, RiArrowRightSLine } from "react-icons/ri";

export default function Menu() {
	const { isLoggedIn } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	if (isLoggedIn) {
		return (
			<div
				className="position-absolute d-flex flex-column rounded-5 shadow-sm bottom-0 bg-home mw-profile p-4 pb-5"
				style={{ zIndex: 10, height: "60%" }}
			>
				<Link href="/profile/edit">
					<div className="d-flex align-items-center cursor-pointer w-100 gap-3 py-3 px-2 fw-semibold">
						<RiUser3Line className="text-warning" size={28} />
						Edit Profile
						<RiArrowRightSLine className="text-warning ms-auto" size={25} />
					</div>
				</Link>
				<Link href="/recipes/mine">
					<div className="d-flex align-items-center cursor-pointer w-100 gap-3 py-3 px-2 fw-semibold">
						<RiAwardLine className="text-warning" size={28} />
						My Recipes
						<RiArrowRightSLine className="text-warning ms-auto" size={25} />
					</div>
				</Link>
				<Link href="/recipes/saved">
					<div className="d-flex align-items-center cursor-pointer w-100 gap-3 py-3 px-2 fw-semibold">
						<RiBookmarkLine className="text-warning" size={28} />
						Saved Recipes
						<RiArrowRightSLine className="text-warning ms-auto" size={25} />
					</div>
				</Link>
				<Link href="/recipes/liked">
					<div className="d-flex align-items-center cursor-pointer w-100 gap-3 py-3 px-2 fw-semibold">
						<RiHeartLine className="text-warning" size={28} />
						Liked Recipes
						<RiArrowRightSLine className="text-warning ms-auto" size={25} />
					</div>
				</Link>
				<div
					className="d-flex align-items-center cursor-pointer w-100 gap-3 py-3 px-2 fw-semibold"
					onClick={() => dispatch(authActions.logout())}
				>
					<RiLogoutBoxLine className="text-warning" size={28} />
					Log Out
				</div>
			</div>
		);
	}

	return (
		<div
			className="position-absolute d-flex flex-column justify-content-center align-items-center rounded-5 shadow bottom-0 bg-home mw-profile gap-3 px-4 pb-5"
			style={{ zIndex: 10, height: "60%" }}
		>
			<span className="fw-semibold mb-2">You are not logged in yet!</span>
			<Link href="/register">
				<button className="btn btn-primary w-75 text-white rounded-4">SIGN UP</button>
			</Link>
			<Link href="/login">
				<button className="btn btn-outline-primary btn-outline-primary-text rounded-4 w-75">LOG IN</button>
			</Link>
		</div>
	);
}
