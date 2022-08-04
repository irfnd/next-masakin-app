import { RiCheckboxCircleFill, RiCloseCircleFill, RiCloseFill } from "react-icons/ri";

export default function FormAlert({ type, message, closeAlert }) {
	if (type === "success") {
		return (
			<div className="alert alert-success d-flex fw-medium">
				<RiCheckboxCircleFill className="me-2" size={24} />
				{message}
				<RiCloseFill className="ms-auto cursor-pointer" size={24} onClick={closeAlert} />
			</div>
		);
	}
	return (
		<div className="alert alert-danger d-flex fw-medium">
			<RiCloseCircleFill className="me-2" size={24} />
			{message}
			<RiCloseFill className="ms-auto cursor-pointer" size={24} onClick={closeAlert} />
		</div>
	);
}
