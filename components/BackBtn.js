import { useRouter } from "next/router";

// Icons + Images
import { BiLeftArrowAlt } from "react-icons/bi";

export default function BackBtn({ style, color }) {
	const router = useRouter();

	// Attributes
	const iconColor = `position-absolute cursor-pointer ${color || "text-primary"}`;

	return (
		<div className={iconColor} style={style}>
			<BiLeftArrowAlt size={36} onClick={() => router.back()} />
		</div>
	);
}
