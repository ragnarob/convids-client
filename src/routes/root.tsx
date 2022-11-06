import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Layout, Typography } from "antd";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default function Root({}) {
  return (
    <ApolloProvider client={client}>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout.Header className="nav">
          <Navbar />
        </Layout.Header>
        <Layout.Content style={{ padding: "1rem" }}>
          <Outlet />
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
    </ApolloProvider>
  );
}
