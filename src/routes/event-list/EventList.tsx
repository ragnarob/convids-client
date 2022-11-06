import { Radio, Typography } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import RecurringEventList from "../../components/recurring-event-list";
import SingleEventList from "../../components/single-event-list";

export default function EventList({}) {
  const [mode, setMode] = useState("single");

  return (
    <>
      <Typography>
        <Typography.Title level={1}>All events</Typography.Title>
      </Typography>

      <NavLink to="/">Back to home</NavLink>

      <br />

      <Radio.Group
        options={[
          { label: "All events, ungrouped", value: "single" },
          { label: "Grouped by convention", value: "recurring" },
        ]}
        defaultValue="single"
        optionType="button"
        buttonStyle="solid"
        onChange={(e) => setMode(e.target.value)}
      />

      {mode === "single" && <SingleEventList />}
      {mode === "recurring" && <RecurringEventList />}
    </>
  );
}
