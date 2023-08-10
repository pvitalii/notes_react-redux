import { ReactNode } from "react";

type tableProps = {
  tableHeaders: ReactNode[],
  children: ReactNode
}

export const Table = (props: tableProps) => {
  return (
    <table className="text-center w-full border-collapse">
      <tbody>
        <tr className="bg-primary text-white">
          {
            props.tableHeaders.map((header) =>
              <td key={header?.toString()}>{header}</td>
            )
          }
        </tr>
        {props.children}
      </tbody>
    </table>
  )
}