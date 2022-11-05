import { Card, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { Video } from "../../types/types";
import { daysAgoString } from "../../utils";
import "./video-card.css";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <NavLink to={`/event/${video.title}`} style={{ width: "fit-content" }}>
      <Card
        size="small"
        style={{ width: "fit-content" }}
        hoverable
        className="video-card"
      >
        <Typography.Text strong>{video.title}</Typography.Text>
        <Typography>by [flag] {video.maker.name}</Typography>
        <Typography>{daysAgoString(video.date)}</Typography>
      </Card>
    </NavLink>
  );
}
