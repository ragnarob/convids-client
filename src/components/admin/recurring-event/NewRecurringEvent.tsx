import { Button, Form, Input, Result, Select, Space, Typography } from "antd";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import countries from "../../../utils/countries.json";
import useNewRecurringEvent from "./useNewRecurringEvent";

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

interface NewRecurringEventProps {
  onFinish: () => void;
}

export default function NewRecurringEvent({
  onFinish,
}: NewRecurringEventProps) {
  const { onSubmit, success } = useNewRecurringEvent();

  return (
    <>
      <Typography>
        <Typography.Title level={3}>New recurring event</Typography.Title>
      </Typography>

      {success && (
        <Result
          status="success"
          title="Successfully added event"
          extra={[
            <Button type="primary" key="console" onClick={onFinish}>
              Close
            </Button>,
          ]}
        ></Result>
      )}

      {!success && (
        <Form
          name="New recurring event"
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
            <Input placeholder="eg. Midwest Furfest" />
          </Form.Item>
          <Form.Item label="Short title" name="shortTitle">
            <Input placeholder="eg. MFF" />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            required
            rules={[{ required: true }]}
          >
            <Select showSearch>
              {countries.map((country) => (
                <Select.Option value={country.name} key={country.name}>
                  {getUnicodeFlagIcon(country.code)} {country.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea />
          </Form.Item>

          <Form.Item label="Furtrack tag" name="furtrackTag">
            <Input placeholder="eg. midwest_furfest" />
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
