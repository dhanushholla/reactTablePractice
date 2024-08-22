import React from "react";
import "./table.css";

const TableComp = ({
  headers,
  tableContent,
  deleteRow,
  sortHandle,
  sortmessage,
}) => {
  const headerLabel = headers.map((header) =>
    header.replace("_", "").toUpperCase()
  );
  return (
    <div>
      <div style={{ overflowY: "scroll", height: "100vh" }}>
        <div>
          {sortmessage ? <span>{sortmessage}</span> : ""}
          <table>
            <thead>
              <tr>
                {headerLabel.map((Header, index) => (
                  <th key={`${Header}_${index}`}>
                    {Header}
                    <div>
                      <button onClick={() => sortHandle(index, "asc")}>
                        asc
                      </button>
                      <button onClick={() => sortHandle(index, "desc")}>
                        desc
                      </button>
                    </div>
                  </th>
                ))}
                <th>
                  <button onClick={() => deleteRow("All")}>Delete All</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableContent.map((content, rowIndex) => (
                <tr key={`${content}_${rowIndex}`}>
                  {headers.map((Header, colIndex) => (
                    <td key={`${content[Header]}_${colIndex}`}>
                      {content[Header]}
                    </td>
                  ))}
                  <td>
                    <button onClick={() => deleteRow(rowIndex)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )
      </div>
    </div>
  );
};

export default TableComp;
