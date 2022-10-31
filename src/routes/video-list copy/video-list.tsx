import { NavLink } from "react-router-dom";

export default function VideoList({}) {
  return (
    <>
      <h1>All videos</h1>

      <NavLink to="/">Back to home</NavLink>

      <div>
        <p>Here's a list of all the videos!</p>
      </div>
    </>
  );
}
