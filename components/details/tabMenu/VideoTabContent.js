import useSWR from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import VideoList from "@/components/lists/VideoList";

export default function VideoTabContent({ id }) {
	const { data } = useSWR(`/recipes/${id}`, recipesWrapper.get);
	const steps = data.steps;
	const videos = data.videos;

	return (
		<>
			{steps?.map((step, i) =>
				step === videos[i]?.shortDesc ? (
					<VideoList key={i} step={step} video={null} i={i} />
				) : (
					<VideoList key={i} video={videos[i]} step={step} i={i} />
				)
			)}
		</>
	);
}
