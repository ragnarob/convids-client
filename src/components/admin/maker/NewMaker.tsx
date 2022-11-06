import { Button, Form, Input, Result, Select, Space, Typography } from "antd";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import countries from "../../../utils/countries.json";
import useNewMaker from "./useNewMaker";

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

interface NewMakerProps {
  onFinish: () => void;
}

export default function NewMaker({ onFinish }: NewMakerProps) {
  const { onSubmit, success } = useNewMaker();

  return (
    <>
      <Typography>
        <Typography.Title level={3}>New maker</Typography.Title>
      </Typography>

      {success && (
        <Result
          status="success"
          title="Successfully added maker"
          extra={[
            <Button type="primary" key="console" onClick={onFinish}>
              Close
            </Button>,
          ]}
        />
      )}

      {!success && (
        <Form
          name="New maker"
          colon={false}
          labelWrap={true}
          onFinish={onSubmit}
          {...formLayout}
        >
          <Form.Item
            label="Name"
            name="name"
            required
            rules={[{ required: true }]}
          >
            <Input />
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
