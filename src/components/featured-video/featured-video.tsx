import VideoEmbed from "../video-embed";
import useFeaturedVideo from "./use-featured-video";

export default function FeaturedVideo() {
  const { video } = useFeaturedVideo();

  return (
    <section>
      <h2>Featured Video</h2>
      <p style={{ fontSize: "0.75rem" }}>
        A video we think deserves more love!
      </p>
      <VideoEmbed video={video} />
    </section>
  );
}
