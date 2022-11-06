import { Card } from "antd";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { NavLink } from "react-router-dom";
import { RecurringEvent } from "../../types/types";
import { countryCodeToName } from "../../utils";

interface RecurringEventCardProps {
  event: RecurringEvent;
}

export default function RecurringEventCard({ event }: RecurringEventCardProps) {
  return (
    <NavLink to={`/convention/${event.title}`}>
      <Card size="small" hoverable>
        <p>
          {event.title} {event.shortTitle && `(${event.shortTitle})`}
        </p>
        <p>
          Country: {getUnicodeFlagIcon(event.country)}{" "}
          {countryCodeToName(event.country)}
        </p>
        Events:{" "}
        <ul>
          {event.events.map((event) => (
            <li key={event.title}>{event.title}</li>
          ))}
        </ul>
      </Card>
    </NavLink>
  );
}
