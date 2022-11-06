import { Space, Typography } from "antd";
import { NavLink } from "react-router-dom";
import MakerCard from "../../components/maker-card";
import useMakerList from "./useMakerList";
import useMakerListGql, { MakersDataFormat } from "./useMakerList.gql";

interface MakerListProps {
  dataProvider: MakersDataFormat;
}

export default function MakerListWrapper({}) {
  const makersGqlHandler = useMakerListGql();
  return <MakerList dataProvider={makersGqlHandler} />;
}

function MakerList({ dataProvider }: MakerListProps) {
  const { makers } = useMakerList(dataProvider);

  return (
    <>
      <Typography>
        <Typography.Title level={1}>All makers</Typography.Title>
      </Typography>

      <NavLink to="/">Back to home</NavLink>

      <div className="red-box">
        <p>
          These results will obviously look better, this is just temporary. Will
          have search/sorting.
        </p>
      </div>

      <Space wrap align="start">
        {makers.map((maker) => (
          <MakerCard maker={maker} key={maker.id} />
        ))}
      </Space>
    </>
  );
}
