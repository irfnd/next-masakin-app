import { useRouter } from "next/router";

// Icons + Images
import { BiLeftArrowAlt } from "react-icons/bi";

export default function FormBackBtn() {
	const router = useRouter();

	return (
		<div className="w-auto mx-4 text-primary">
			<BiLeftArrowAlt size={36} onClick={() => router.back()} />
		</div>
	);
}
