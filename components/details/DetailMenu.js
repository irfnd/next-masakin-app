import { useState } from "react";

// Components
import TabMenu from "@/components/details/tabMenu/TabMenu";
import TabContent from "@/components/details/tabMenu/TabContent";

export default function DetailMenu({ id }) {
	const [tabActive, setTabActive] = useState("details");

	return (
		<div
			className="position-absolute d-flex flex-column rounded-5 bg-home mw-mobile p-4"
			style={{ height: "60%", bottom: 0 }}
		>
			<TabMenu tabActive={tabActive} changeTab={setTabActive} />
			<TabContent tabActive={tabActive} id={id} />
		</div>
	);
}
