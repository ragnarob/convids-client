import { Typography } from "antd";
import useRecurringEventList from "./useRecurringEventList";

export default function RecurringEventList({}) {
  const { events } = useRecurringEventList();

  return (
    <>
      {events &&
        events.length > 0 &&
        events.map((e) => <Typography>{JSON.stringify(e)}</Typography>)}
    </>
  );
}
