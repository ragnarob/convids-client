import "@fontsource/mulish";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Admin from "./routes/admin";
import Event from "./routes/event";
import EventList from "./routes/event-list";
import LandingPage from "./routes/landing-page";
import Maker from "./routes/maker";
import MakerList from "./routes/maker-list";
import RecurringEvent from "./routes/recurring-event";
import Root from "./routes/root";
import VideoList from "./routes/video-list";
import "./styles/App.css";
import { createErrorPage } from "./utils/ErrorPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        errorElement: createErrorPage("Furry con videos"),
      },
      {
        path: "/video-list",
        element: <VideoList />,
        errorElement: createErrorPage("All videos", true),
      },
      {
        path: "/maker-list",
        element: <MakerList />,
        errorElement: createErrorPage("All makers", true),
      },
      {
        path: "/event-list",
        element: <EventList />,
        errorElement: createErrorPage("All events", true),
      },
      { path: "/event/:eventName", element: <Event /> },
      { path: "/convention/:eventName", element: <RecurringEvent /> },
      { path: "/maker/:makerName", element: <Maker /> },
      { path: "/admin", element: <Admin /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
