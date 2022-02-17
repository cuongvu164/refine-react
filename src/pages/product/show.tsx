import { IResourceComponentsProps, useShow } from "@pankod/refine-core";
import { Show, Typography, Tag } from "@pankod/refine-antd";

import { IProducts, IDirectoryProduct } from "interfaces";

const { Title, Text } = Typography;

export const ProductShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IProducts>();
  console.log("queryResult", queryResult)
  const { data, isLoading } = queryResult;
  const record = data?.data;

  console.log("record in show", record)

  // const { data: categoryData } = useOne<ICategory>({
  //   resource: "categories",
  //   id: record?.category.id ?? "",
  //   queryOptions: {
  //     enabled: !!record?.category.id,
  //   },
  // });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>Sku</Title>
      <Tag>{record?.sku}</Tag>

      <Title level={5}>Price</Title>
      <Text>${record?.price}</Text>

      <Title level={5}>Create at</Title>
      <Text>{record?.created_at}</Text>

      <Title level={5}>Update at</Title>
      <Text>{record?.updated_at}</Text>
    </Show>
  );
};
