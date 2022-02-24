import { GetListResponse, HttpError } from "@pankod/refine-core";
import {
  useTable,
  List,
  Table,
} from "@pankod/refine-antd";
import type { IResourceComponentsProps } from "@pankod/refine-core";
import { IDirectory } from "../../interfaces";

export const DirectoryList: React.FC<
  IResourceComponentsProps<GetListResponse<IDirectory>>
> = ({ initialData }) => {
  const { tableProps } = useTable<IDirectory,HttpError >({
    // queryOptions: {
    //   initialData,
    // },
    initialCurrent: 1,
    initialPageSize: 10,
    
  });

  console.log("tableProps in directory", {...tableProps});

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="two_letter_abbreviation" title="two_letter_abbreviation" />
        <Table.Column dataIndex="full_name_locale" title="full_name_locale" />
      </Table>
    </List>
  );
};
