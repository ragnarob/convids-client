import { useQuery } from "@apollo/client";
import { allEventsQuery } from "../../routes/event-list/event-list.queries";
import { EventsGqlResponse } from "../../types/types";

export default function useSingleEventList() {
  const { loading, error, data } = useQuery<EventsGqlResponse>(allEventsQuery);

  if (error) {
    throw error;
  }

  return { events: data?.events || [] };
}
