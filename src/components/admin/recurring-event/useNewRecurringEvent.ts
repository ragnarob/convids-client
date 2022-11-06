import { gql, useMutation } from "@apollo/client";
import countries from "../../../types/countries.json";
import {
  AddRecurringEventGqlResponse,
  RecurringEvent,
} from "../../../types/types";

const countryNameToCode = (countryName: string) => {
  const country = countries.find((c) => c.name === countryName);
  return country?.code as string;
};

const createRecurringEventQuery = gql`
  mutation CreateRecurringEvent(
    $title: String!
    $shortTitle: String
    $furtrackTag: String
    $country: String!
    $links: String
  ) {
    addRecurringEvent(
      title: $title
      shortTitle: $shortTitle
      furtrackTag: $furtrackTag
      country: $country
      links: $links
    ) {
      data {
        id
      }
      error
      ok
    }
  }
`;

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
