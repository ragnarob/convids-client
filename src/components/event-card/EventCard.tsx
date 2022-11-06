import { Card } from "antd";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { NavLink } from "react-router-dom";
import { Event } from "../../types/types";
import { getDateFromObj } from "../../utils";
import "./event-card-styles.css";

interface EventBoxProps {
  event: Event;
}

export default function EventBox({ event }: EventBoxProps) {
  return (
    <NavLink to={`/event/${event.title}`}>
      <Card size="small" hoverable>
        <p>{event.title}</p>
        <p>{event.shortTitle}</p>
        <p>Date: {getDateFromObj(event).toDateString()}</p>
        <p>
          Con: {getUnicodeFlagIcon(event.recurringEvent.country)}{" "}
          {event.recurringEvent.title}
        </p>
      </Card>
    </NavLink>
  );
}
