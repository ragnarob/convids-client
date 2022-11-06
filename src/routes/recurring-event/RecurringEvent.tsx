import { Typography } from "antd";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function RecurringEvent({}) {
  const { eventName } = useParams<{ eventName: string }>();

  return (
    <>
      <Typography.Title level={1}>Convention: {eventName}</Typography.Title>

      <NavLink to="/">Back to home</NavLink>

      <div>
        <p>Here are all the details about the convention!</p>
      </div>

      <div className="red-box">
        <p>Will create this view later</p>
      </div>
    </>
  );
}
