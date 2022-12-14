import { gql, useMutation } from "@apollo/client";
import { AddMakerGqlResponse, Maker } from "../../../types/types";
import { countryNameToCode } from "../../../utils";

const createMakerQuery = gql`
  mutation CreateMaker(
    $name: String!
    $country: String!
    $links: String
    $furtrackTag: String
  ) {
    addMaker(
      name: $name
      country: $country
      links: $links
      furtrackTag: $furtrackTag
    ) {
      data {
        id
      }
      error
      ok
    }
  }
`;

export default function useNewMaker() {
  const [addGqlRecurringEvent, { data, loading, error }] =
    useMutation<AddMakerGqlResponse>(createMakerQuery);

  function onSubmit(maker: Maker) {
    const mappedEvent: Maker = {
      ...maker,
      country: countryNameToCode(maker.country),
    };
    addGqlRecurringEvent({ variables: mappedEvent });
  }

  const success = data?.addMaker?.ok && data?.addMaker?.data;

  return { onSubmit, success };
}
