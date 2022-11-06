import { gql, useQuery } from "@apollo/client";
import { Maker, MakersGqlResponse } from "../../types/types";

export const allMakersQuery = gql`
  query AllMakers {
    makers {
      id
      name
      links
      country
    }
  }
`;

export interface MakersDataFormat {
  makers: Maker[];
  loading: boolean;
  error: string | undefined;
}

export default function useMakerListGql(): MakersDataFormat {
  const { loading, error, data } = useQuery<MakersGqlResponse>(allMakersQuery);

  return {
    loading,
    error: error?.message,
    makers: data?.makers || [],
  };
}
