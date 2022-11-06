import { Typography } from "antd";
import useSingleEventList from "./useSingleEventList";

export default function SingleEventList({}) {
  const { events } = useSingleEventList();

  return (
    <>
      {events &&
        events.length > 0 &&
        events.map((e) => <Typography>{JSON.stringify(e)}</Typography>)}
    </>
  );
}
