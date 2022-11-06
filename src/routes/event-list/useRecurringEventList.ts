import { useQuery } from "@apollo/client";
import { RecurringEventsGqlResponse } from "../../types/types";
import { allRecurringEventsQuery } from "./event-list.queries";

export default function useRecurringEventList() {
  const { loading, error, data } = useQuery<RecurringEventsGqlResponse>(
    allRecurringEventsQuery
  );

  if (error) {
    throw error;
  }

  return { events: data?.recurringEvents || [] };
}
