import { Button, Form, Input, Result, Select, Space, Typography } from "antd";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import countries from "../../../utils/countries.json";
import useNewVideo from "./useNewVideo";

const labelCol = {
  span: 4,
  md: { span: 3 },
  lg: { span: 2 },
  xxl: { span: 1 },
};
const formTailLayout = {
  labelCol,
  wrapperCol: {
    offset: 0,
    sm: { offset: 4 },
    md: { offset: 3 },
    lg: { offset: 2 },
    xxl: { offset: 1 },
  },
};
const formLayout = {
  labelCol,
  wrapperCol: { span: 8, offset: 0 },
};

interface NewVideoProps {
  onFinish: () => void;
}

export default function NewVideo({ onFinish }: NewVideoProps) {
  const { makers, onSubmit, success } = useNewVideo();

  return (
    <>
      <Typography>
        <Typography.Title level={3}>New video</Typography.Title>
      </Typography>

      {success && (
        <Result
          status="success"
          title="Successfully added video"
          extra={[
            <Button type="primary" key="console" onClick={onFinish}>
              Close
            </Button>,
          ]}
        />
      )}

      {!success && (
        <Form
          name="New video"
          colon={false}
          labelWrap={true}
          onFinish={onSubmit}
          {...formLayout}
        >
          <Form.Item
            label="Title"
            name="title"
            required
            rules={[{ required: true }]}
          >
            <Input placeholder="Normally same as YT title" />
          </Form.Item>

          <Form.Item
            label="Maker"
            name="maker"
            required
            rules={[{ required: true }]}
          >
            <Select showSearch>
              {makers.map((maker) => (
                <Select.Option value={maker.id}>
                  {getUnicodeFlagIcon(maker.country)} {maker.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Country"
            name="country"
            required
            rules={[{ required: true }]}
          >
            <Select showSearch>
              {countries.map((country) => (
                <Select.Option value={country.name}>
                  {getUnicodeFlagIcon(country.code)} {country.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Furtrack tag" name="furtrackTag">
            <Input placeholder="eg. melon_mow" />
          </Form.Item>

          <Form.Item label="Links" name="links">
            <Input.TextArea placeholder="One link per line" />
          </Form.Item>

          <Form.Item {...formTailLayout}>
            <Space>
              <Button onClick={onFinish}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      )}
    </>
  );
}
