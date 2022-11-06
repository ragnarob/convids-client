import { ReloadOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";

interface ErrorPageProps {
  title: string;
  link:
    | {
        url: string;
        text: string;
      }
    | undefined;
}

export function createErrorPage(title: string, homeLink?: boolean) {
  if (homeLink) {
    return (
      <ErrorPage title={title} link={{ url: "/", text: "Back to homepage" }} />
    );
  }
  return <ErrorPage title={title} link={undefined} />;
}

export function ErrorPage({ title, link }: ErrorPageProps) {
  const buttons = [
    <Button
      type="primary"
      key="console"
      onClick={() => window.location.reload()}
      icon={<ReloadOutlined />}
    >
      Reload page
    </Button>,
  ];

  if (link) {
    buttons.push(
      <NavLink to={link.url}>
        <Button key="console">{link.text}</Button>
      </NavLink>
    );
  }

  return (
    <Result
      status="error"
      title="Something went wrong"
      subTitle="We apologize for the inconvenience. If this happens repeatedly, please contact us."
      extra={buttons}
    />
  );
}
