import Link from "next/link";
import { useRouter } from "next/router";

// Icons + Images
import { BiHomeAlt, BiPlusCircle, BiSearch, BiUser } from "react-icons/bi";

export default function Navbar() {
	const router = useRouter();

	const activeNav = (url) => (router.pathname == url ? "btn-primary text-white" : "btn-white btn-white-text");

	return (
		<div className="fixed-bottom navbar mw-mobile bg-white p-0 mx-auto">
			<div className="row text-center w-100 gap-2 p-3 m-0">
				<Link href="/">
					<button className={`col btn ${activeNav("/")} rounded-4 py-3 p-0`}>
						<BiHomeAlt size={28} />
					</button>
				</Link>

				<Link href="/recipes/add">
					<button className={`col btn ${activeNav("/recipes/add")} rounded-4 py-3 p-0`}>
						<BiPlusCircle size={28} />
					</button>
				</Link>

				{/* <Link href="/profile">
					<button className={`col btn ${activeNav("/chat")} rounded-4 py-3 p-0`}>
						<BiSearch size={28} />
					</button>
				</Link> */}

				<Link href="/profile">
					<button className={`col btn ${activeNav("/profile")} rounded-4 py-3 p-0`}>
						<BiUser size={28} />
					</button>
				</Link>
			</div>
		</div>
	);
}
