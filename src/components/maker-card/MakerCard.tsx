import { Card } from "antd";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { NavLink } from "react-router-dom";
import { Maker } from "../../types/types";
import { countryCodeToName } from "../../utils";
import "./maker-card.css";

interface MakerCardProps {
  maker: Maker;
  hoverable?: boolean;
}

export default function MakerCard({ maker, hoverable = true }: MakerCardProps) {
  return (
    <NavLink to={`/maker/${maker.name}`}>
      <Card
        size="small"
        hoverable={hoverable}
        className={`video-card ${hoverable ? "" : "hover-fill"}`}
      >
        <p>{maker.name}</p>
        <p>
          {getUnicodeFlagIcon(maker.country)} {countryCodeToName(maker.country)}
        </p>
        <p>999 videos</p>
        <p>Latest: 2 months ago</p>
      </Card>
    </NavLink>
  );
}
