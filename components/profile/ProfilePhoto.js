import { useSelector } from "react-redux";

export default function ProfilePhoto() {
	const { user } = useSelector((state) => state.auth);

	// Attributes
	const name = user?.name || "Guest";
	const photoUrl = `url(${user?.photo || "/images/profile-placeholder.png"})`;
	const photoStyle = {
		width: 100,
		height: 100,
		backgroundImage: photoUrl,
		backgroundPosition: "center",
		backgroundSize: "cover",
	};
	const roundedBox = { height: 85, bottom: -35, borderRadius: "2rem 2rem 0 0" };

	return (
		<div className="d-flex flex-column align-items-center h-50 border-0 bg-primary w-100">
			<div className="position-relative d-flex flex-column h-100 w-100 justify-content-center align-items-center pb-4">
				<div className="bg-white rounded-circle mb-3" style={photoStyle}></div>
				<span className="text-white ts-18 fw-semibold">{name}</span>
				<div className="position-absolute bg-white mw-profile" style={roundedBox}></div>
			</div>
		</div>
	);
}
