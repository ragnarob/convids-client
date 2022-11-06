import { renderHook } from "@testing-library/react";
import { RecurringEvent } from "../../types/types";
import useRecurringEvent from "./useRecurringEvent";
import { RecurringEventGqlReturn } from "./useRecurringEvent.gql";

const mockedEvents: RecurringEvent[] = [
  {
    id: "1",
    title: "Test Event",
    country: "NO",
    events: [],
  },
  {
    id: "2",
    title: "Test Event 2",
    country: "US",
    events: [],
  },
];

const testResponse: RecurringEventGqlReturn = {
  loading: false,
  error: undefined,
  events: mockedEvents,
};

describe("recurring event", () => {
  test("result should have the length of the data provided", () => {
    const { result } = renderHook(() => useRecurringEvent(testResponse));
    expect(result.current.events.length).toBe(mockedEvents.length);
  });
});
