import { SearchOutlined } from "@ant-design/icons";
import { Input, Spin, Typography } from "antd";
import { NavLink } from "react-router-dom";
import VideoCard from "../video-card";
import "./navbar-styles.css";
import useNavbar from "./useNavbar";

export default function Navbar() {
  const { loading, search, setSearch, searchResults, isEmptyResult } =
    useNavbar();
  console.log(searchResults);

  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="navbar-wrapper">
          <div className="navbar-left">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search video, event, ++"
              className="navbar-search"
              prefix={<SearchOutlined />}
              bordered={false}
              onClick={(e) => e.stopPropagation()}
            />

            <div className="navbar-links">
              <NavLink to="/video-list">All videos</NavLink>
              <NavLink to="/event-list">All events</NavLink>
              <NavLink to="/maker-list">All makers</NavLink>
            </div>
          </div>
          <div className="navbar-links navbar-right">
            <NavLink to="/admin">Admin</NavLink>
          </div>
        </div>

        {(loading || searchResults.length > 0 || isEmptyResult) && (
          <div className="search-results">
            {loading && searchResults.length === 0 && (
              <Spin style={{ margin: "3rem 0" }} size="large" />
            )}

            {isEmptyResult && (
              <div className="no-results">
                <Typography>No videos found</Typography>
              </div>
            )}

            {searchResults &&
              searchResults.map((result) => (
                <VideoCard video={result} key={result.id} hoverable={false} />
              ))}
          </div>
        )}
      </div>
    </>
  );
}
