import { gql, useMutation, useQuery } from "@apollo/client";
import {
  AddEventGqlResponse,
  RecurringEventsGqlResponse,
} from "../../../types/types";

const createEventQuery = gql`
  mutation CreateEvent(
    $title: String!
    $shortTitle: String
    $furtrackTag: String
    $date: String!
    $recurringEventId: Int
  ) {
    addEvent(
      title: $title
      shortTitle: $shortTitle
      furtrackTag: $furtrackTag
      date: $date
      recurringEventId: $recurringEventId
    ) {
      data {
        id
      }
      error
      ok
    }
  }
`;

export const recurringEventNameQuery = gql`
  query AllRecurringEvents {
    recurringEvents {
      id
      title
    }
  }
`;

export default function useNewEvent() {
  const { error: recurringEventErr, data: recurringEventData } =
    useQuery<RecurringEventsGqlResponse>(recurringEventNameQuery);
  if (recurringEventErr) {
    throw recurringEventErr;
  }

  const [addGqlEvent, { data, loading, error }] =
    useMutation<AddEventGqlResponse>(createEventQuery);

  function onSubmit(newEvent: Event) {
    const mappedEvent: Event = {
      ...newEvent,
    };
    addGqlEvent({ variables: mappedEvent });
  }

  const success = data?.addEvent?.ok && data?.addEvent?.data;

  return {
    recurringEvents: recurringEventData?.recurringEvents || [],
    onSubmit,
    success,
  };
}
