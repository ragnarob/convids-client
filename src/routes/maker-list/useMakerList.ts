import { MakersDataFormat } from "./useMakerList.gql";

export default function useMakerList(dataProvider: MakersDataFormat) {
  const { loading, error, makers } = dataProvider;

  if (error) {
    throw error;
  }

  return { makers };
}
