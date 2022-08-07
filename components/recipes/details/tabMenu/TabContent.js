// Components
import DetailTabContent from "@/components/recipes/details/tabMenu/DetailTabContent";
import VideoTabContent from "@/components/recipes/details/tabMenu/VideoTabContent";
import CommentTabContent from "@/components/recipes/details/tabMenu/CommentTabContent";

export default function TabContent({ tabActive, id }) {
	// Attributes
	const checkContent = (tabActive) => {
		switch (tabActive) {
			case "videos":
				return <VideoTabContent id={id} />;
			case "comments":
				return <CommentTabContent id={id} />;
			default:
				return <DetailTabContent id={id} />;
		}
	};

	return <div className="overflow-scroll tabs-content text-secondary-3 ts-14 pb-4">{checkContent(tabActive)}</div>;
}
