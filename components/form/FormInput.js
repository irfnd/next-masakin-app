import { cloneElement, useState } from "react";

// Icons + Images
import { BiShow, BiHide } from "react-icons/bi";

export default function FormInput({ mb, icon, input }) {
	const [showPassword, setShowPassword] = useState(false);
	const [iconColor, setIconColor] = useState(false);

	const changeIconColor = () => setIconColor(!iconColor);

	return (
		<div className={`position-relative d-flex align-items-center w-100 ${mb ? `mb-${mb}` : null}`}>
			{cloneElement(icon, { className: `position-absolute ms-3 ${iconColor ? "text-primary" : "text-secondary-2"}`, size: 24 })}
			<input
				type={input.type === "password" ? (showPassword ? "text" : input.type) : input.type}
				className={`form-control ${input.bg} ps-5`}
				placeholder={input.placeholder}
				onFocus={changeIconColor}
				onBlur={changeIconColor}
			/>
			{input.type === "password" && (
				<>
					{showPassword ? (
						<BiHide className="position-absolute text-primary show-icon me-3 end-0" size={26} onClick={() => setShowPassword(!showPassword)} />
					) : (
						<BiShow className="position-absolute text-primary show-icon me-3 end-0" size={26} onClick={() => setShowPassword(!showPassword)} />
					)}
				</>
			)}
		</div>
	);
}
