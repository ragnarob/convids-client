import { Space } from "antd";
import EventBox from "../event-card";
import useSingleEventList from "./useSingleEventList";

export default function SingleEventList({}) {
  const { events } = useSingleEventList();

  return (
    <Space wrap align="start">
      {events &&
        events.length > 0 &&
        events.map((e) => <EventBox event={e} key={e.id} />)}
    </Space>
  );
}
