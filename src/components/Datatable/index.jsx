import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Table } from "react-bootstrap";

function Datatable() {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Data",
        accessor: "data", // accessor is the "key" in the data
      },
      {
        Header: "Turno",
        accessor: "turno",
      },
      {
        Header: "PM",
        accessor: "pm",
      },
      {
        Header: "PC",
        accessor: "pc",
      },
      {
        Header: "GMN",
        accessor: "gmn",
      },
      {
        Header: "ITEP",
        accessor: "itep",
      },
      {
        Header: "CBMRN",
        accessor: "cbmrn",
      },
      {
        Header: "SEAP",
        accessor: "seap",
      },
      {
        Header: "Editar",
        accessor: "editar",
      },
      {
        Header: "PDF",
        accessor: "pdf",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Table {...getTableProps()} striped bordered hover>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                // style={{
                //   borderBottom: "solid 3px red",
                //   background: "aliceblue",
                //   color: "black",
                //   fontWeight: "bold",
                // }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    // style={{
                    //   padding: "10px",
                    //   border: "solid 1px gray",
                    //   background: "papayawhip",
                    // }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Datatable;
