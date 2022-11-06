import { gql, useMutation, useQuery } from "@apollo/client";
import { AddVideoGqlResponse, Event, Maker } from "../../../types/types";

const newVideoQuery = gql`
  mutation CreateVideo(
    $title: String!
    $eventId: Int
    $makerId: Int!
    $url: String!
    $date: String!
    $songs: String
  ) {
    addVideo(
      title: $title
      eventId: $eventId
      makerId: $makerId
      url: $url
      date: $date
      songs: $songs
    ) {
      data {
        id
      }
      error
      ok
    }
  }
`;

const allMakersSimpleQuery = gql`
  query AllMakersSimple {
    makers {
      id
      name
      country
    }
  }
`;

interface AllMakersSimpleGqlResponse {
  makers: Maker[];
}

const allEventsSimpleQuery = gql`
  query AllEventsSimple {
    events {
      id
      title
    }
  }
`;

interface AllEventsSimpleGqlResponse {
  events: Event[];
}

interface NewVideo {
  title: string;
  eventId?: number;
  makerId: number;
  url: string;
  date: string;
  songs?: string;
}

export default function useNewMaker() {
  const [
    addGqlVideo,
    { data: submitData, loading: submitLoading, error: submitError },
  ] = useMutation<AddVideoGqlResponse>(newVideoQuery);

  const {
    loading: makersLoading,
    error: makersError,
    data: makersData,
  } = useQuery<AllMakersSimpleGqlResponse>(allMakersSimpleQuery);

  const {
    loading: eventsLoading,
    error: eventsError,
    data: eventsData,
  } = useQuery<AllEventsSimpleGqlResponse>(allEventsSimpleQuery);

  function onSubmit(video: NewVideo) {
    console.log(video);
    addGqlVideo({ variables: video });
  }

  const success = submitData?.addVideo?.ok && submitData?.addVideo?.data;

  return {
    onSubmit,
    success,
    makers: makersData?.makers || [],
    events: eventsData?.events || [],
  };
}
