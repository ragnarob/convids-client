import { NavLink, useParams } from "react-router-dom";

export default function Event({}) {
  const { eventName } = useParams<{ eventName: string }>();

  return (
    <>
      <h1>{eventName}</h1>

      <NavLink to="/">Back to home</NavLink>

      <div>
        <p>Here's all the details about the event!</p>
      </div>
    </>
  );
}
