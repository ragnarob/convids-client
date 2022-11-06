import { useQuery } from "@apollo/client";
import { allRecurringEventsQuery } from "../../routes/event-list/event-list.queries";
import { RecurringEvent, RecurringEventsGqlResponse } from "../../types/types";

export interface RecurringEventGqlReturn {
  events: RecurringEvent[];
  loading: boolean;
  error: string | undefined;
}

export default function useRecurringEventGql(): RecurringEventGqlReturn {
  const { loading, error, data } = useQuery<RecurringEventsGqlResponse>(
    allRecurringEventsQuery
  );

  return {
    loading,
    error: error?.message,
    events: data?.recurringEvents || [],
  };
}
