import { gql, useQuery } from "@apollo/client";
import { VideosGqlResponse } from "../../types/types";

const mostRecentVideosQuery = gql`
  query MostRecentVideos {
    videos(limit: 4) {
      id
      title
      url
      date
      event {
        title
      }
      maker {
        name
        country
      }
    }
  }
`;

export default function useRecentVideos() {
  const { loading, error, data } = useQuery<VideosGqlResponse>(
    mostRecentVideosQuery
  );

  if (error) {
    throw error;
  }
  return { videos: data?.videos || [] };
}
