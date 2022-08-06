// Components
import DetailTabContent from "@/components/recipes/details/tabMenu/DetailTabContent";
import VideoTabContent from "@/components/recipes/details/tabMenu/VideoTabContent";
import CommentTabContent from "@/components/recipes/details/tabMenu/CommentTabContent";

export default function TabContent({ tabActive }) {
	// Attributes
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

	return <div className="overflow-scroll tabs-content text-secondary-3 ts-14 pb-4">{checkContent(tabActive)}</div>;
}
