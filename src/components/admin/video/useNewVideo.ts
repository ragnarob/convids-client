import { gql, useMutation, useQuery } from "@apollo/client";
import { AddMakerGqlResponse, Maker } from "../../../types/types";
import { countryNameToCode } from "../../../utils";

const createMakerQuery = gql`
  mutation CreateMaker($title: String!, $country: String!, $links: String) {
    addMaker(title: $title) {
      data {
        id
      }
      error
      ok
    }
  }
`;

const allMakersSimpleQuery = gql`
  query AllMakersSimple {
    makers {
      id
      name
      country
    }
  }
`;

interface AllMakersSimpleGqlResponse {
  makers: Maker[];
}

export default function useNewMaker() {
  const [
    addGqlRecurringEvent,
    { data: submitData, loading: submitLoading, error: submitError },
  ] = useMutation<AddMakerGqlResponse>(createMakerQuery);

  const {
    loading: makersLoading,
    error: makersError,
    data: makersData,
  } = useQuery<AllMakersSimpleGqlResponse>(allMakersSimpleQuery);

  function onSubmit(maker: Maker) {
    const mappedEvent: Maker = {
      ...maker,
      country: countryNameToCode(maker.country),
    };
    addGqlRecurringEvent({ variables: mappedEvent });
  }

  const success = submitData?.addMaker?.ok && submitData?.addMaker?.data;

  return { onSubmit, success, makers: makersData?.makers || [] };
}
