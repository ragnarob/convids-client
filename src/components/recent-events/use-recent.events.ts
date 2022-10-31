import { gql, useQuery } from "@apollo/client";

const GET_EVENTS = gql`
  query GetEvents {
    events(limit: 3) {
      id
      title
      country
      date
    }
  }
`;

export default function useRecentEvents() {
  const { loading, error, data } = useQuery(GET_EVENTS);
  if (error) {
    throw error;
  }
  return { events: data?.events || [] };
}
