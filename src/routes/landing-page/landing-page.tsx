import {
  BankOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import RecentVideos from "../../components/recent-videos";
import "./landing-page-styles.css";

export default function LandingPage({}) {
  return (
    <section>
      <Typography.Title level={1}>Furry Con Videos</Typography.Title>

      <Typography.Text>
        This is a site for furry convention videos. You can find videos from
        lalal allala. Bla bla bla. Please asd asd asd asd asd. asd asd asd asd.
        Fill in some nice nice text here later!!
      </Typography.Text>

      <Space className="button-container">
        <Link to={"/video-list"}>
          <Button type="primary" size="large" icon={<VideoCameraOutlined />}>
            Videos
          </Button>
        </Link>
        <Link to={"/maker-list"}>
          <Button type="primary" size="large" icon={<UserOutlined />}>
            Makers
          </Button>
        </Link>
        <Link to={"/event-list"}>
          <Button type="primary" size="large" icon={<BankOutlined />}>
            Events
          </Button>
        </Link>
      </Space>

      <RecentVideos />
    </section>
  );
}
