import { gql } from "@apollo/client";

export const allEventsQuery = gql`
  query AllEvents {
    events {
      title
      furtrackTag
      date
      recurringEvent {
        title
      }
    }
  }
`;
export const allRecurringEventsQuery = gql`
  query AllRecurringEvents {
    recurringEvents {
      id
      title
      shortTitle
      furtrackTag
      country
      links
      events {
        title
      }
    }
  }
`;
