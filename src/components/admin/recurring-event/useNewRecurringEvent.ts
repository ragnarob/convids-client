import { useMutation } from "@apollo/client";
import {
  AddRecurringEventGqlResponse,
  RecurringEvent,
} from "../../../types/types";
import { countryNameToCode } from "../../../utils";
import { createRecurringEventQuery } from "./new-recurring-event.queries";

export default function useNewRecurringEvent() {
  const [addGqlRecurringEvent, { data, loading, error }] =
    useMutation<AddRecurringEventGqlResponse>(createRecurringEventQuery);

  function onSubmit(newEvent: RecurringEvent) {
    const mappedEvent: RecurringEvent = {
      ...newEvent,
      country: countryNameToCode(newEvent.country),
    };
    addGqlRecurringEvent({ variables: mappedEvent });
  }

  const success = data?.addRecurringEvent?.ok && data?.addRecurringEvent?.data;

  return { onSubmit, success };
}
