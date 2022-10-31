import { NavLink } from "react-router-dom";

export default function MakerList({}) {
  return (
    <>
      <h1>All makers</h1>

      <NavLink to="/">Back to home</NavLink>

      <div>
        <p>Here's a list of all the makers we have videos from!</p>
      </div>
    </>
  );
}
