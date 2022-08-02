import Link from "next/link";

// Icons + Images
import { BiHomeAlt, BiPlusCircle, BiComment, BiUser } from "react-icons/bi";

export default function Navbar() {
	return (
		<div className={`position-relative d-flex flex-column bg-light mw-mobile`}>
			<div className="position-absolute navbar fixed-bottom bg-white p-0">
				<div className="row text-center w-100 gap-2 p-3 m-0">
					<Link href="/">
						<button className="col btn btn-primary rounded-4 py-3 p-0">
							<BiHomeAlt className="text-white" size={28} />
						</button>
					</Link>

					<Link href="/">
						<button className="col btn btn-white rounded-4 py-3 p-0">
							<BiPlusCircle className="btn-white-text" size={28} />
						</button>
					</Link>

					<Link href="/">
						<button className="col btn btn-white rounded-4 py-3 p-0">
							<BiComment className="btn-white-text" size={28} />
						</button>
					</Link>

					<Link href="/">
						<button className="col btn btn-white rounded-4 py-3 p-0">
							<BiUser className="btn-white-text" size={28} />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
