import { Typography } from "antd";
import { NavLink, useParams } from "react-router-dom";

export default function Event({}) {
  const { eventName } = useParams<{ eventName: string }>();

  return (
    <>
      <Typography.Title level={1}>Event: {eventName}</Typography.Title>

      <NavLink to="/">Back to home</NavLink>

      <div>
        <p>Here are all the details about the event!</p>
      </div>

      <div className="red-box">
        <p>Will create this view later</p>
      </div>
    </>
  );
}
