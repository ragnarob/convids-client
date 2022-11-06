import { useState } from "react";

type AdminAction =
  | "add-single-event"
  | "add-recurring-event"
  | "add-maker"
  | "add-video";

export default function useAdmin() {
  const [action, setAction] = useState<AdminAction | undefined>();

  return { action, setAction };
}
