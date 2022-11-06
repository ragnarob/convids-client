import { VideosDataFormat } from "./useVideoList.gql";

export default function useVideoList(dataProvider: VideosDataFormat) {
  const { loading, error, videos } = dataProvider;

  if (error) {
    throw error;
  }

  return { videos };
}
