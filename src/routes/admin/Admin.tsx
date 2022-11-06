import { Radio, Typography } from "antd";
import { NavLink } from "react-router-dom";
import NewEvent from "../../components/admin/event/NewEvent";
import NewMaker from "../../components/admin/maker/NewMaker";
import NewRecurringEvent from "../../components/admin/recurring-event/NewRecurringEvent";
import NewVideo from "../../components/admin/video/NewVideo";
import useAdmin from "./useAdmin";

export default function Admin() {
  const { action, setAction } = useAdmin();

  return (
    <>
      <Typography>
        <Typography.Title level={1}>Admin</Typography.Title>
      </Typography>

      <NavLink to="/">Back to home</NavLink>

      <div>
        <p>Here's admi nadmin admin admin</p>
      </div>

      <Radio.Group
        options={[
          { label: "Add single event", value: "add-single-event" },
          { label: "Add recurring event", value: "add-recurring-event" },
          { label: "Add maker", value: "add-maker" },
          { label: "Add video", value: "add-video" },
        ]}
        optionType="button"
        buttonStyle="solid"
        onChange={(e) => setAction(e.target.value)}
        value={action}
        style={{ marginBottom: "1rem" }}
      />

      {action === "add-single-event" && (
        <NewEvent onFinish={() => setAction(undefined)} />
      )}
      {action === "add-recurring-event" && (
        <NewRecurringEvent onFinish={() => setAction(undefined)} />
      )}
      {action === "add-maker" && (
        <NewMaker onFinish={() => setAction(undefined)} />
      )}
      {action === "add-video" && (
        <NewVideo onFinish={() => setAction(undefined)} />
      )}
    </>
  );
}
