import { gql, useLazyQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import { Video, VideosGqlResponse } from "../../types/types";

const searchVideosQuery = gql`
  query searchVideosQuery($searchText: String!) {
    videos(searchText: $searchText) {
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

export default function useNavbar() {
  const [getVideos, { loading, error, data }] =
    useLazyQuery<VideosGqlResponse>(searchVideosQuery);

  const [search, setSearch] = useState("");
  const [searchResults, setSeachResults] = useState<Video[]>([]);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (search) {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }

      searchTimeoutRef.current = setTimeout(() => {
        getVideos({
          variables: { searchText: search },
        });
        searchTimeoutRef.current = undefined;
      }, 500);
    } else {
      clearTimeout(searchTimeoutRef.current);
      setSeachResults([]);
    }
  }, [search]);

  useEffect(() => {
    if (!loading && !error && search) {
      setSeachResults(data?.videos || []);
      if (data?.videos) {
        document.addEventListener("click", () => {
          setSeachResults([]);
          setSearch("");
        });
      }
    }
  }, [loading, error, search, data]);

  const isEmptyResult =
    search &&
    !loading &&
    !error &&
    searchResults.length === 0 &&
    !searchTimeoutRef.current;

  return {
    loading: loading || searchTimeoutRef.current,
    search,
    setSearch,
    searchResults,
    isEmptyResult,
  };
}
