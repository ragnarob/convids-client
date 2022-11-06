import {
  Button,
  DatePicker,
  Form,
  Input,
  Result,
  Select,
  Typography,
} from "antd";
import useNewEvent from "./useNewEvent";

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

export default function NewEvent() {
  const { recurringEvents, onSubmit, success } = useNewEvent();

  return (
    <>
      <Typography>
        <Typography.Title level={3}>New event</Typography.Title>
      </Typography>

      {success && (
        <Result
          status="success"
          title="Successfully added event"
          extra={[
            <Button type="primary" key="console">
              Close
            </Button>,
          ]}
        ></Result>
      )}

      {!success && (
        <Form
          name="New event"
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
            <Input placeholder="eg. Midwest Furfest 2022" />
          </Form.Item>
          <Form.Item label="Short title" name="shortTitle">
            <Input placeholder="eg. MFF 2022" />
          </Form.Item>
          <Form.Item
            label="Parent event"
            name="recurringEventId"
            required
            rules={[{ required: true }]}
          >
            <Select>
              {recurringEvents.map((re) => (
                <Select.Option value={re.id} key={re.title}>
                  {re.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Start date"
            name="date"
            required
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item label="Furtrack tag" name="furtrackTag">
            <Input placeholder="eg. mff2022" />
          </Form.Item>

          <Form.Item {...formTailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
}
