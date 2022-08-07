import useSWR from "swr";
import recipesWrapper from "@/utils/axios/recipesWrapper";

// Components
import VideoList from "@/components/lists/VideoList";

export default function VideoTabContent({ id }) {
	const { data, error } = useSWR(`/recipes/${id}`, recipesWrapper.get);
	const steps = data.steps;
	const videos = data.videos;

	if (error) return <p>Something went wrong!</p>;
	if (!data) return <p>Loading...</p>;

	return (
		<>
			{steps.map((step, i) =>
				step === videos[i]?.shortDesc ? (
					<VideoList key={i} step={step} video={null} i={i} />
				) : (
					<VideoList key={i} video={videos[i]} step={step} i={i} />
				)
			)}
		</>
	);
}
