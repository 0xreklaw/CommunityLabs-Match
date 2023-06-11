import React from "react";

const Table = ({ tableHeads, tableValues}) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHeads && tableHeads.map((rows, index) => {
              return (
                <th
                  scope="col"
                  class="px-6 py-3 w-auto whitespace-nowrap"
                  key={index}
                >
                  {rows}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableValues && tableValues.map((value, index) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                {value.map((val, i) => {
                  return (
                    <td className="px-6 py-4 w-auto whitespace-nowrap" key={i}>
                      {val}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
