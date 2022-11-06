import { useQuery } from "@apollo/client";
import { allRecurringEventsQuery } from "../../routes/event-list/event-list.queries";
import { RecurringEventsGqlResponse } from "../../types/types";

export default function useRecurringEventList() {
  const { loading, error, data } = useQuery<RecurringEventsGqlResponse>(
    allRecurringEventsQuery
  );

  if (error) {
    throw error;
  }

  return { events: data?.recurringEvents || [] };
}
