import { ReactNode } from "react";
import "./Table.css";

type tableProps = {
  tableHeaders: ReactNode[],
  children: ReactNode
}

export const Table = (props: tableProps) => {
  return (
    <table className="table">
      <tbody>
        <tr className="table-header">
          {
            props.tableHeaders.map((header) =>
              <td>{header}</td>
            )
          }
        </tr>
        {props.children}
      </tbody>
    </table>
  )
}