import { useQuery } from "@apollo/client";
import { EventsGqlResponse } from "../../types/types";
import { allEventsQuery } from "./event-list.queries";

export default function useSingleEventList() {
  const { loading, error, data } = useQuery<EventsGqlResponse>(allEventsQuery);

  if (error) {
    throw error;
  }

  return { events: data?.events || [] };
}
