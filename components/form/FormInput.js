import { cloneElement, useState } from "react";

export default function FormInput({ mb, icon, input }) {
	const [iconColor, setIconColor] = useState(false);

	const changeIconColor = () => setIconColor(!iconColor);

	return (
		<div className={`d-flex align-items-center ${mb ? `mb-${mb}` : null}`}>
			{cloneElement(icon, { className: `position-absolute ms-3 ${iconColor ? "text-primary" : "text-secondary-2"}`, size: 24 })}
			<input
				type={input.type}
				className={`form-control ${input.bg} ps-5`}
				placeholder={input.placeholder}
				onFocus={changeIconColor}
				onBlur={changeIconColor}
			/>
		</div>
	);
}
