import { NavLink } from "react-router-dom";

interface EventCardProps {
  event: any;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <NavLink to={`/event/${event.title}`}>
      <div style={{ border: "1px solid #ccc", width: "fit-content" }}>
        <p>{event.title}</p>
        <p>{event.date}</p>
      </div>
    </NavLink>
  );
}
