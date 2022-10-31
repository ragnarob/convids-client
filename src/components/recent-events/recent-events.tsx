import EventCard from "../event-card";
import useRecentEvents from "./use-recent.events";

export default function RecentEvents({}) {
  const { events } = useRecentEvents();

  return (
    <section>
      <h2>Recent events</h2>
      <div>List of events here</div>
      {events && events.map((e: any) => <EventCard event={e} key={e.id} />)}
    </section>
  );
}
