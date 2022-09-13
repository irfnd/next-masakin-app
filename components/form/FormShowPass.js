// Icons + Images
import { BiShow, BiHide } from "react-icons/bi";

export default function FormShowPass({ showPassword, ...rest }) {
	if (showPassword) {
		return (
			<BiHide
				className="position-absolute text-primary cursor-pointer me-3 end-0"
				size={26}
				style={{ zIndex: 10 }}
				{...rest}
			/>
		);
	} else {
		return (
			<BiShow
				className="position-absolute text-primary cursor-pointer me-3 end-0"
				size={26}
				style={{ zIndex: 10 }}
				{...rest}
			/>
		);
	}
}
