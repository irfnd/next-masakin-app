import { useState } from "react";

// Components
import DetailTabContent from "@/components/recipes/details/tabsContent/DetailTabContent";
import VideoTabContent from "@/components/recipes/details/tabsContent/VideoTabContent";
import CommentTabContent from "@/components/recipes/details/tabsContent/CommentTabContent";

export default function DetailMenu() {
	const [tabActive, setTabActive] = useState("details");

	// Attributes
	const tabsStyle = (tabs) => `p-2 cursor-pointer ${tabs === tabActive ? "tabs-active" : "tabs"}`;
	const checkContent = (tabActive) => {
		switch (tabActive) {
			case "videos":
				return <VideoTabContent />;
			case "comments":
				return <CommentTabContent />;
			default:
				return <DetailTabContent />;
		}
	};

	return (
		<div
			className="position-absolute d-flex flex-column rounded-5 shadow-sm bottom-0 bg-home mw-mobile w-100 p-4 pb-5"
			style={{ zIndex: 10, height: "60%" }}
		>
			<div className="d-flex justify-content-center gap-4 mb-4">
				<div className={tabsStyle("details")} onClick={() => setTabActive("details")}>
					Details
				</div>
				<div className={tabsStyle("videos")} onClick={() => setTabActive("videos")}>
					Video Steps
				</div>
				<div className={tabsStyle("comments")} onClick={() => setTabActive("comments")}>
					Comments
				</div>
			</div>
			<div className="overflow-scroll tabs-content text-secondary-3 ts-14 pb-4">{checkContent(tabActive)}</div>
		</div>
	);
}
