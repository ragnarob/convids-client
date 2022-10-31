import { NavLink } from "react-router-dom";

interface EventCardProps {
  event: any;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <NavLink to={`/event/${event.title}`}>
      <div className="event-card">
        <p>{event.title}</p>
        <p>{event.date}</p>
      </div>
    </NavLink>
  );
}
