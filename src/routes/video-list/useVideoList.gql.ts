import { gql, useQuery } from "@apollo/client";
import { Video, VideosGqlResponse } from "../../types/types";

const allVideosQuery = gql`
  query AllVideos {
    videos {
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

export interface VideosDataFormat {
  videos: Video[];
  loading: boolean;
  error: string | undefined;
}

export default function useVideoGql(): VideosDataFormat {
  const { loading, error, data } = useQuery<VideosGqlResponse>(allVideosQuery);

  return {
    loading,
    error: error?.message,
    videos: data?.videos || [],
  };
}
