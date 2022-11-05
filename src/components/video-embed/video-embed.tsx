import { Typography } from "antd";
import ReactPlayer from "react-player";
import { Video } from "../../types/types";
import { daysAgoString } from "../../utils";
import "./video-embed-styles.css";

export default function VideoEmbed({ video }: { video: Video }) {
  return (
    <div className="video-container">
      <Typography.Text className="video-title">{video.title}</Typography.Text>
      <br />
      <Typography.Text>
        by {video.maker.name}, {daysAgoString(video.date)}
      </Typography.Text>
      <div className="player-wrapper">
        <ReactPlayer
          url={video.url}
          controls
          width="100%"
          height="100%"
          className="react-player"
        />
      </div>
    </div>
  );
}
