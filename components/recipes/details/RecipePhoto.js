// Icons + Images
import { RiHeartFill, RiBookmarkFill } from "react-icons/ri";

// Components
import BackBtn from "@/components/BackBtn";

export default function RecipePhoto() {
	// Attributes
	const photoUrl = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(/images/teriyaki.jpg)`;
	const photoStyle = { height: "50%", backgroundImage: photoUrl, backgroundSize: "cover" };

	return (
		<div className="d-flex flex-column justify-content-center align-items-center bg-primary gap-3 w-100 p-4 pb-5" style={photoStyle}>
			<div className="position-relative d-flex justify-content-between align-items-end pb-5 mb-5 w-100 h-100">
				<BackBtn style={{ top: 0 }} />
				<div className="d-flex flex-column gap-2 w-50">
					<span className="text-white ts-36 lh-2 fw-bold">Sandwich with Egg</span>
					<span className="text-white ts-14 fw-light">By Chef Ronald Humson</span>
				</div>
				<div className="d-flex gap-2">
					<button className="btn btn-warning rounded-circle text-white p-2 me-1">
						<RiHeartFill size={24} />
					</button>
					<button className="btn btn-warning rounded-circle text-white p-2">
						<RiBookmarkFill size={24} />
					</button>
				</div>
			</div>
		</div>
	);
}
