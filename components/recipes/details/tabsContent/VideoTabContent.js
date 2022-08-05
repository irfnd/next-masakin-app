// Components
import VideoList from "@/components/lists/VideoList";

export default function VideoTabContent({ videos }) {
	return (
		<>
			{[...Array(5)].map((el, i) => (
				<VideoList key={i} i={i} />
			))}
		</>
	);
}
