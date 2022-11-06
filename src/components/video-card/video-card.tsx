import { Card, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { Video } from "../../types/types";
import { daysAgoString } from "../../utils";
import "./video-card.css";

interface VideoCardProps {
  video: Video;
  hoverable?: boolean;
  fullWidthMobile?: boolean;
}

export default function VideoCard({
  video,
  hoverable = true,
  fullWidthMobile = false,
}: VideoCardProps) {
  return (
    <NavLink
      to={`/event/${video.title}`}
      className={fullWidthMobile ? "full-width-mobile" : ""}
    >
      <Card
        size="small"
        hoverable={hoverable}
        className={`video-card ${hoverable ? "" : "hover-fill"}`}
      >
        <Typography.Text strong>{video.title}</Typography.Text>
        <Typography>by [flag] {video.maker.name}</Typography>
        <Typography>{daysAgoString(video.date)}</Typography>
      </Card>
    </NavLink>
  );
}
