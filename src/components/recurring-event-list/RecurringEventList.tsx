import { Typography } from "antd";
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
    <>
      {events &&
        events.length > 0 &&
        events.map((e) => <Typography>{JSON.stringify(e)}</Typography>)}
    </>
  );
}
