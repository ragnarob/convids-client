import {
  Button,
  DatePicker,
  Form,
  Input,
  Result,
  Select,
  Space,
  Typography,
} from "antd";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { Event, Maker } from "../../../types/types";
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
  wrapperCol: { span: 10, offset: 0 },
};

interface NewVideoProps {
  onFinish: () => void;
}

function mapSelectValuesToIds(makers: Maker[], events: Event[], values: any) {
  return {
    ...values,
    makerId: Number(makers.find((maker) => maker.name === values.maker)?.id),
    eventId: values.event
      ? Number(
          events.find((event) => event.title === values.event)?.id as string
        )
      : undefined,
  };
}

export default function NewVideo({ onFinish }: NewVideoProps) {
  const { makers, events, onSubmit, success } = useNewVideo();

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
          onFinish={(v) => onSubmit(mapSelectValuesToIds(makers, events, v))}
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
            label="Url"
            name="url"
            required
            rules={[{ required: true }]}
          >
            <Input placeholder="https://www.youtube.com/watch?v=XXXXXXX" />
          </Form.Item>

          <Form.Item
            label="Published"
            name="date"
            required
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item label="Event" name="event">
            <Select showSearch>
              {events.map((event) => (
                <Select.Option value={event.title} key={event.id}>
                  {event.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Maker"
            name="maker"
            required
            rules={[{ required: true }]}
          >
            <Select showSearch>
              {makers.map((maker) => (
                <Select.Option value={maker.name} key={maker.id}>
                  {getUnicodeFlagIcon(maker.country)} {maker.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Songs" name="songs">
            <p>Coming later</p>
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
