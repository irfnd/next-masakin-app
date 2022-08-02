import Link from "next/link";

// Icons + Images
import { BiLeftArrowAlt } from "react-icons/bi";

export default function FormBackBtn() {
	return (
		<div className="w-auto mx-4">
			<Link href="/login" passHref>
				<a>
					<BiLeftArrowAlt size={36} />
				</a>
			</Link>
		</div>
	);
}
