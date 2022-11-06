import { Typography } from "antd";
import { NavLink } from "react-router-dom";

export default function VideoList({}) {
  return (
    <>
      <Typography>
        <Typography.Title level={1}>All videos</Typography.Title>
      </Typography>

      <NavLink to="/">Back to home</NavLink>

      <div>
        <p>Here's a list of all the videos!</p>
      </div>
    </>
  );
}
