import { Space, Typography } from "antd";
import VideoCard from "../video-card";
import VideoEmbed from "../video-embed";
import "./recent-videos-styles.css";
import useRecentVideos from "./use-recent-videos";

export default function RecentVideos({}) {
  const { videos } = useRecentVideos();
  const smallerVideos = videos.slice(1, 4);

  if (!videos || !videos.length) {
    return null;
  }

  return (
    <section>
      <Typography.Title level={2} style={{ marginBottom: 0 }}>
        Newest videos
      </Typography.Title>
      <VideoEmbed video={videos[0]} />
      <Space className="recent-vids-container">
        {smallerVideos &&
          smallerVideos.map((v) => <VideoCard video={v} key={v?.id} />)}
      </Space>
      <br />
    </section>
  );
}
