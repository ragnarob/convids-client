import { gql, useQuery } from "@apollo/client";
import { VideosGqlResponse } from "../../types/types";

const featuredVideoQuery = gql`
  query FeaturedVideo {
    videos(limit: 1) {
      id
      title
      url
      event {
        title
      }
      maker {
        name
      }
    }
  }
`;

export default function useFeaturedVideo() {
  const { loading, error, data } =
    useQuery<VideosGqlResponse>(featuredVideoQuery);

  if (error || !data || !data.videos) {
    throw error;
  }
  return { video: data.videos[0] };
}
