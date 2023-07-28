import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import Pagination from "./Pagination";
import { CsvData } from "./CsvDataComponent"; 

export interface TableComponentProps {
  columns: TableColumn<CsvData>[];
  paginatedData: CsvData[];
  filteredData: CsvData[];
  PageSize: number;
  ScrollSize: number;
  currentPage: number;
  handlePageChange: (selectedPage: number) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({ columns, paginatedData, filteredData, PageSize, ScrollSize, currentPage, handlePageChange }) => {
  const alternateRowStyle = {
    backgroundColor: "#f5f5f5", 
  };

  return (
    <DataTable
      columns={columns}
      data={paginatedData}
      pagination
      paginationServer
      paginationTotalRows={filteredData.length}
      paginationPerPage={PageSize}
      noHeader
      paginationComponent={() => <Pagination totalCount={filteredData.length} currentPage={currentPage} pageSize={PageSize} onPageChange={handlePageChange} />}
      fixedHeader 
      fixedHeaderScrollHeight={`${ScrollSize * 30}px`} 
      conditionalRowStyles={[
        {
          when: (row: CsvData) => filteredData.indexOf(row) % 2 === 0,
          style: alternateRowStyle,
        },
      ]}
    />
  );
};

export default TableComponent;
