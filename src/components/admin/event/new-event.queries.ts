import { gql } from "@apollo/client";

export const createEventQuery = gql`
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
