import { List } from "@raycast/api";
import { getAssetFromProduct } from "../helpers/getAssetFromProduct";
import { getEnvironmentString } from "../helpers/getEnvironmentString";
import { getFormattedDate } from "../helpers/getFormattedDate";
import { Environment, ProtonProduct, Version } from "../interface";

interface Props {
  data?: Version;
  environment: Environment;
  product: ProtonProduct;
}

const ProtonVersionList = ({ data, environment, product }: Props) => {
  return (
    <List.Item
      title={`${data?.version}${getEnvironmentString(environment)}` ?? "Error while loading data"}
      icon={{ source: getAssetFromProduct(product) }}
      subtitle={`${product}, deployed on: ${getFormattedDate(data?.date)}`}
    />
  );
};

export default ProtonVersionList;
