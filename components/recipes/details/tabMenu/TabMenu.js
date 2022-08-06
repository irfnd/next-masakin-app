export default function TabMenu({ tabActive, changeTab }) {
	// Attributes
	const tabsStyle = (tabs) => `p-2 cursor-pointer ${tabs === tabActive ? "tabs-active" : "tabs"}`;

	return (
		<div className="d-flex justify-content-center gap-4 mb-4">
			<div className={tabsStyle("details")} onClick={() => changeTab("details")}>
				Details
			</div>
			<div className={tabsStyle("videos")} onClick={() => changeTab("videos")}>
				Video Steps
			</div>
			<div className={tabsStyle("comments")} onClick={() => changeTab("comments")}>
				Comments
			</div>
		</div>
	);
}
