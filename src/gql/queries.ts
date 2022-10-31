import { gql } from "@apollo/client";

export default {
  events: gql`
    query {
      events {
        id
        title
        country
        date
        links
      }
    }
  `,
};
