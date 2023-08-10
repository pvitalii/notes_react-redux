import { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

type TableType = typeof Table;

const meta: Meta<TableType> = {
  title: "Common/Table",
  component: Table
}

export default meta;

export const DefaultTable: StoryObj<TableType> = {
  args: {
    tableHeaders: [
      'Name',
      'Created',
      'Category',
      'Content',
      'Dates',
      <div className="flex items-center justify-end gap-2"><img src="./img/white_archive.svg" alt="archive" /><img src="./img/white_delete.svg" alt="delete" /></div>
    ],
    children: <tr>
      <td>name</td>
      <td>created</td>
      <td>category</td>
      <td>content</td>
      <td>dates</td>
      <td></td>
    </tr>
  }
}