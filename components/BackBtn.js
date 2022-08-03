import Link from "next/link";

// Icons + Images
import { BiLeftArrowAlt } from "react-icons/bi";

export default function BackBtn() {
	return (
		<div className="position-absolute">
			<Link href="/" passHref>
				<a>
					<BiLeftArrowAlt size={36} />
				</a>
			</Link>
		</div>
	);
}
