// Icons + Images
import { RiPlayFill, RiForbidFill } from "react-icons/ri";

export default function VideoList({ step, video, i }) {
	return (
		<div className="row d-flex bg-light rounded-4 shadow-sm gap-3 w-100 m-0 mt-3 p-3">
			<div className="col-auto p-0">
				<div
					className="d-flex justify-content-center align-items-center rounded-4 bg-warning"
					style={{ height: "70px", width: "70px" }}
				>
					{video ? <RiPlayFill className="text-white" size={30} /> : <RiForbidFill className="text-white" size={30} />}
				</div>
			</div>
			<div className="col d-flex flex-column p-0">
				<span className="ts-16 fw-semibold">Step {i + 1}</span>
				<span>{step}</span>
			</div>
		</div>
	);
}
