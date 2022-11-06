import { renderHook } from "@testing-library/react";
import { Maker } from "../../types/types";
import useMakerList from "./useMakerList";
import { MakersDataFormat } from "./useMakerList.gql";

const mockedMakers: Maker[] = [
  {
    id: 1,
    name: "Test maker",
    links: "https://www.youtube.com/watch?v=H9HFigfkKHA",
    country: "NF",
  },
  {
    id: 2,
    name: "Test maker 2",
    country: "NO",
  },
];

const testResponse: MakersDataFormat = {
  loading: false,
  error: undefined,
  makers: mockedMakers,
};

describe("maker list", () => {
  test("result should have the length of the data provided", () => {
    const { result } = renderHook(() => useMakerList(testResponse));
    expect(result.current.makers.length).toBe(mockedMakers.length);
  });
});
