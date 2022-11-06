import { gql } from "@apollo/client";

export const createRecurringEventQuery = gql`
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
