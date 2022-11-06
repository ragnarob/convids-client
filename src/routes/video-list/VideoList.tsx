import { Space, Typography } from "antd";
import { NavLink } from "react-router-dom";
import VideoCard from "../../components/video-card/VideoCard";
import useVideoGql, { VideosDataFormat } from "./useVideoList.gql";

export interface VideoListProps {
  dataProvider: VideosDataFormat;
}

export default function VideoListWrapper({}) {
  const videosGqlHandler = useVideoGql();
  return <VideoList dataProvider={videosGqlHandler} />;
}

function VideoList({ dataProvider }: VideoListProps) {
  const { videos } = dataProvider;

  return (
    <>
      <Typography>
        <Typography.Title level={1}>All videos</Typography.Title>
      </Typography>

      <NavLink to="/">Back to home</NavLink>

      <div className="red-box">
        <p>
          These results will obviously look better, this is just temporary. Will
          have search/sorting.
        </p>
      </div>

      <Space>
        {videos.map((video) => (
          <VideoCard video={video} key={video.id} />
        ))}
      </Space>
    </>
  );
}
