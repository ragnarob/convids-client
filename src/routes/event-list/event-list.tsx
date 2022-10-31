import { NavLink } from "react-router-dom";

export default function EventList({}) {
  return (
    <>
      <h1>All events</h1>

      <NavLink to="/">Back to home</NavLink>

      <div>
        <p>Here's a list of all the events!</p>
      </div>
    </>
  );
}
