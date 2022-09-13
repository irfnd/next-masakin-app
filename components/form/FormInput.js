import { cloneElement, useState } from "react";
import { useFormContext } from "react-hook-form";

// Components
import FormShowPass from "@/components/form/FormShowPass";

export default function FormInput({ mb, icon, input }) {
	const [showPassword, setShowPassword] = useState(false);
	const [iconColor, setIconColor] = useState(false);

	const { register, formState } = useFormContext();
	const { onChange, name, ref } = register(input.name);
	const { errors } = formState;

	// Attributes
	const container = `${mb ? `mb-${mb}` : null}`;
	const iconStyle = `position-absolute ms-3 ${
		errors[input.name] ? "text-danger" : iconColor ? "text-primary" : "text-secondary-2"
	}`;
	const inputType = input.type === "password" ? (showPassword ? "text" : input.type) : input.type;
	const inputStyle = `form-control rounded-4 ${input.bg} ${errors[input.name] && "is-invalid"} ps-5`;

	return (
		<div className={container}>
			<div className="position-relative d-flex align-items-center w-100">
				{cloneElement(icon, { className: iconStyle, size: 24, style: { zIndex: 10 } })}
				<div className="input-group has-validation">
					<input
						type={inputType}
						name={name}
						className={inputStyle}
						placeholder={input.placeholder}
						onFocus={() => setIconColor(!iconColor)}
						onBlur={() => setIconColor(!iconColor)}
						onChange={onChange}
						ref={ref}
					/>
				</div>
				{input.type === "password" && (
					<FormShowPass showPassword={showPassword} onClick={() => setShowPassword(!showPassword)} />
				)}
			</div>
			{errors[input.name] && <span className="text-danger ts-14">{errors[input.name].message}</span>}
		</div>
	);
}
