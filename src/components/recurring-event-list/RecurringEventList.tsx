import { Space } from "antd";
import RecurringEventCard from "../recurring-event-card";
import useRecurringEvent from "./useRecurringEvent";
import useRecurringEventGql, {
  RecurringEventGqlReturn,
} from "./useRecurringEvent.gql";

export default function RecurringEventListContainer({}) {
  const eventsGqlHandler = useRecurringEventGql();
  return <RecurringEventList dataProvider={eventsGqlHandler} />;
}

export interface RecurringEventListProps {
  dataProvider: RecurringEventGqlReturn;
}
function RecurringEventList({ dataProvider }: RecurringEventListProps) {
  const { events } = useRecurringEvent(dataProvider);

  return (
    <Space wrap align="start">
      {events &&
        events.length > 0 &&
        events.map((e) => <RecurringEventCard event={e} key={e.id} />)}
    </Space>
  );
}
