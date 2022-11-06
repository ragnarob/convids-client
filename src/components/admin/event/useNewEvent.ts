import { useMutation, useQuery } from "@apollo/client";
import {
  AddEventGqlResponse,
  RecurringEventsGqlResponse,
} from "../../../types/types";
import { createEventQuery, recurringEventNameQuery } from "./new-event.queries";

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
