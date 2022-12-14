import { useState } from "react";

// Icons + Images
import { BiSearch } from "react-icons/bi";

export default function InputSearch({ mb, value, onChange }) {
	const [iconColor, setIconColor] = useState(false);

	return (
		<div className={`d-flex align-items-center w-100 mb-${mb}`}>
			<BiSearch
				className={`position-absolute ms-3 ${iconColor ? "text-primary" : "text-secondary-2"}`}
				size={24}
				style={{ zIndex: 10 }}
			/>
			<input
				type="search"
				name="search"
				className="form-control bg-light rounded-4 ps-5"
				placeholder="Search Pasta, Bread, etc"
				value={value}
				onFocus={() => setIconColor(!iconColor)}
				onBlur={() => setIconColor(!iconColor)}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
}
