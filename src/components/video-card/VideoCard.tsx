import { Card } from "antd";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { NavLink } from "react-router-dom";
import { Video } from "../../types/types";
import { daysAgoString, getDateFromObj } from "../../utils";
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
        <p>{video.title}</p>
        <p>
          {getUnicodeFlagIcon(video.maker.country)} {video.maker.name}
        </p>
        <p>{daysAgoString(getDateFromObj(video))}</p>
      </Card>
    </NavLink>
  );
}
