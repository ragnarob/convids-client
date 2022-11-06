import { renderHook } from "@testing-library/react";
import { Video } from "../../types/types";
import useVideoList from "./useVideoList";
import { VideosDataFormat } from "./useVideoList.gql";

const mockedVideos: Video[] = [
  {
    id: 1,
    title: "Test videoooo",
    url: "https://www.youtube.com/watch?v=H9HFigfkKHA",
    date: "1659463240441",
    maker: { id: 123, name: "Ragnar", country: "NF" },
  },
  {
    id: 2,
    title: "Test video 2",
    url: "https://www.youtube.com/watch?v=ABCBABAC",
    date: "1659463240444",
    maker: { id: 333, name: "Test", country: "US" },
  },
];

const testResponse: VideosDataFormat = {
  loading: false,
  error: undefined,
  videos: mockedVideos,
};

describe("video list", () => {
  test("result should have the length of the data provided", () => {
    const { result } = renderHook(() => useVideoList(testResponse));
    expect(result.current.videos.length).toBe(mockedVideos.length);
  });
});
