import { ReactNode } from "react";
import { Column } from "../../../types/table.types";
import { capitalizeFirstLetter } from "../../../helpers";

const BaseTable = ({ columns, children }: TableProps) => {
  return (
    <table className="min-w-full bg-white shadow-sm rounded-md overflow-hidden">
      <thead className="bg-slate-50">
        <tr>
          {columns?.map(({ name }) => (
            <th key={name} className="py-2 px-4 border-b border-slate-200">
              {capitalizeFirstLetter(name)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

interface TableProps {
  columns: Column[];
  children: ReactNode;
}

export default BaseTable;
