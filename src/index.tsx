import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "@fontsource/mulish";
import { Layout, Typography } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import reportWebVitals from "./reportWebVitals";
import Admin from "./routes/admin";
import Event from "./routes/event";
import EventList from "./routes/event-list";
import LandingPage from "./routes/landing-page";
import MakerList from "./routes/maker-list";
import VideoList from "./routes/video-list";
import "./styles/App.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MakerList />,
//   },
// ]);
// function asd () {
//   return (
//     <RouterProvider router={router}>

//     </RouterProvider>
//   )
// }

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Layout.Header className="nav">
            <Navbar />
          </Layout.Header>
          <Layout.Content style={{ padding: "1rem" }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/maker-list" element={<MakerList />} />
              <Route path="/video-list" element={<VideoList />} />
              <Route
                path="/event-list"
                element={<EventList />}
                errorElement={<p>Oh no</p>}
              />
              <Route path="/event/:eventName" element={<Event />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Layout.Content>
          <Layout.Footer>
            <Typography style={{ textAlign: "center" }}>
              Made with ❤️ by{" "}
              <a href="https://twitter.com/Melon_mow" target="_blank">
                Melon
              </a>{" "}
              and{" "}
              <a href="https://twitter.com/Patrick_snowyote" target="_blank">
                Patrick
              </a>
            </Typography>
          </Layout.Footer>
        </Layout>
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
