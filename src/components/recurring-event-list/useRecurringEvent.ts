import { RecurringEventGqlReturn } from "./useRecurringEvent.gql";

export default function useRecurringEvent(
  dataProvider: RecurringEventGqlReturn
) {
  const { loading, error, events } = dataProvider;

  if (error) {
    throw error;
  }

  return { events };
}
