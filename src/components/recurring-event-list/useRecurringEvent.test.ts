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
];

const testResponse: RecurringEventGqlReturn = {
  loading: false,
  error: undefined,
  events: mockedEvents,
};

describe("recurring event", () => {
  it("should do something", () => {
    const { result } = renderHook(() => useRecurringEvent(testResponse));
    expect(result.current.events.length).toBe(1);
  });
});
