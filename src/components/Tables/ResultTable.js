import React from 'react';
import { useTable } from 'react-table';
import './ResultTable.css';
import "../Forms/SectionA/Feature1/createForm.css";

const ResultTable = ({ columns, data }) => {
  // Use the useTable hook to create the table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="display-container">
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map(headerGroup => {
            const headerGroupProps = headerGroup.getHeaderGroupProps();
            const { key: headerGroupKey, ...restHeaderGroupProps } = headerGroupProps;
            return (
              <tr key={headerGroupKey} {...restHeaderGroupProps}>
                {headerGroup.headers.map(column => {
                  const columnProps = column.getHeaderProps();
                  const { key: columnKey, ...restColumnProps } = columnProps;
                  return (
                    <th key={columnKey} {...restColumnProps}>{column.render('Header')}</th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            const rowProps = row.getRowProps();
            const { key: rowKey, ...restRowProps } = rowProps;
            return (
              <tr key={rowKey} {...restRowProps}>
                {row.cells.map(cell => {
                  const cellProps = cell.getCellProps();
                  const { key: cellKey, ...restCellProps } = cellProps;
                  return (
                    <td key={cellKey} {...restCellProps}>{cell.render('Cell')}</td>
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

export default ResultTable;
