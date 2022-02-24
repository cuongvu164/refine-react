import { CrudFilters, GetListResponse, HttpError, useCustom, useList } from "@pankod/refine-core";
import {
  useTable,
  List,
  Table,
  Space,
  EditButton,
  ShowButton,
  DeleteButton,
} from "@pankod/refine-antd";
import type { IResourceComponentsProps } from "@pankod/refine-core";
import dataProvider from "@pankod/refine-simple-rest";
import { IProducts, IDirectoryProduct, IProductsFilterVariables } from "../../interfaces";
import { API_URL } from "../../constants";
import { useState, useEffect } from "react";

export const ProductList: React.FC<
  IResourceComponentsProps<GetListResponse<IDirectoryProduct>>
> = ({ initialData }) => {
  // const { searchFormProps } = useTable<IDirectoryProduct, HttpError, IProductsFilterVariables>({
  //   onSearch: (params) => {
  //     const filters: CrudFilters = [];
  //     const { q } = params;

  //     filters.push(
  //       {
  //         field: "q",
  //         operator: "eq",
  //         value: q,
  //       });
  //     return filters;
  //   }

  // });

  // console.log("searchFormProps", searchFormProps);

  // console.log("tableProps", tableProps)

  

  const [pageSize, setPageSize] = useState<any>(10)

  let { data } = useCustom<IDirectoryProduct>({
    url: `${API_URL}/V1/products`,
    method: 'get',
    config: {
      query: {
        'searchCriteria[pageSize]': 300,
        'searchCriteria[currentPage]': 1,
        // filters: {
        //   field: ,
        //   operator: 'eq',
        //   value: sku
        // }
      }
    },
  })
  
  // const newData = { dataSource: data?.data.items, pagination: {pageSize: 10, currentPage: 1, total: data?.data.total_count}}
  const newData = { 
    dataSource: data?.data.items, 
    pagination: { pageSize: pageSize, total: data?.data.items.length } 
  }
  console.log("dataSource", newData)

  // const newItems = []
  // newItems.push(newData.dataSource)

  // console.log("initial", newItems)

  return (
    <List>
      <Table {...newData} rowKey="id" onChange={(e) => { setPageSize(e.pageSize); console.log(e) }}>
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="sku" title="Sku" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="price" title="Price" />
        <Table.Column dataIndex="status" title="Status" />
        <Table.Column<IProducts>
          title="Actions"
          dataIndex="actions"
          render={(_text, record): React.ReactNode => {
            // console.log("newDataItems---------", record);
            return (
              <Space>
                <EditButton
                  size="small"
                  recordItemId={record.sku}
                />
                <ShowButton
                  size="small"
                  recordItemId={record.sku}
                />
                <DeleteButton
                  size="small"
                  recordItemId={record.sku}
                />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  );
};
