import { Typography } from "antd";
import { NavLink } from "react-router-dom";
import NewEvent from "../../components/admin/event/NewEvent";
import NewRecurringEvent from "../../components/admin/recurring-event/NewRecurringEvent";

export default function Admin() {
  return (
    <>
      <Typography>
        <Typography.Title level={1}>Admin</Typography.Title>
      </Typography>

      <NavLink to="/">Back to home</NavLink>

      <div>
        <p>Here's admi nadmin admin admin</p>
      </div>

      <NewEvent />

      <NewRecurringEvent />
    </>
  );
}
