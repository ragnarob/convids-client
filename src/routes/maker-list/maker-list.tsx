import { Typography } from "antd";
import { NavLink } from "react-router-dom";

export default function MakerList({}) {
  return (
    <>
      <Typography>
        <Typography.Title level={1}>All makers</Typography.Title>
      </Typography>

      <NavLink to="/">Back to home</NavLink>

      <div>
        <p>Here's a list of all the makers we have videos from!</p>
      </div>
    </>
  );
}
