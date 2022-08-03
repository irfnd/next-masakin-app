import { useState } from "react";

// Icons + Images
import { BiSearch } from "react-icons/bi";

export default function InputSearch({ mb }) {
	const [iconColor, setIconColor] = useState(false);

	const changeIconColor = () => setIconColor(!iconColor);

	return (
		<div className={`d-flex align-items-center w-100 mb-${mb}`}>
			<BiSearch className={`position-absolute ms-3 ${iconColor ? "text-primary" : "text-secondary-2"}`} size={24} style={{ zIndex: 10 }} />
			<input
				type="text"
				name="search"
				className="form-control bg-light ps-5"
				placeholder="Search Pasta, Bread, etc"
				onFocus={changeIconColor}
				onBlur={changeIconColor}
			/>
		</div>
	);
}
