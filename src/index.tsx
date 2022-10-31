import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Event from "./routes/event";
import EventList from "./routes/event-list";
import LandingPage from "./routes/landing-page";
import MakerList from "./routes/maker-list";
import VideoList from "./routes/video-list";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    // errorElement: <p>Oh no it failed</p>,
  },
  {
    path: "/maker-list",
    element: <MakerList />,
  },
  {
    path: "/video-list",
    element: <VideoList />,
  },
  {
    path: "/event-list",
    element: <EventList />,
  },
  {
    path: "/event/:eventName",
    element: <Event />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
