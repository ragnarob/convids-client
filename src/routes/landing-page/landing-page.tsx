import {
  BankOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import { NavLink } from "react-router-dom";
import RecentVideos from "../../components/recent-videos";
import "./landing-page-styles.css";

export default function LandingPage({}) {
  return (
    <section>
      <h1>Furry Convention Videos!</h1>
      <div>
        <NavLink to="/video-list">All videos</NavLink>
        <NavLink to="/event-list">All events</NavLink>
        <NavLink to="/maker-list">All makers</NavLink>
      </div>
      {/* <FeaturedVideo /> */}
      <RecentVideos />
      <Space className="button-container">
        <Button
          href="/video-list"
          type="primary"
          icon={<VideoCameraOutlined />}
          size="large"
        >
          Browse all videos
        </Button>
        <Button
          href="/maker-list"
          type="primary"
          icon={<UserOutlined />}
          size="large"
        >
          Browse all makers
        </Button>

        <Button
          href="/event-list"
          type="primary"
          icon={<BankOutlined />}
          size="large"
        >
          Browse all events
        </Button>
      </Space>
    </section>
  );
}
