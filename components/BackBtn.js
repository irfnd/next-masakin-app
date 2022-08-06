import { useRouter } from "next/router";

// Icons + Images
import { BiLeftArrowAlt } from "react-icons/bi";

export default function BackBtn({ style }) {
	const router = useRouter();

	return (
		<div className="position-absolute text-primary cursor-pointer" style={style}>
			<BiLeftArrowAlt size={36} onClick={() => router.back()} />
		</div>
	);
}
