import React, { useEffect, useState, useMemo} from "react";
import Papa from "papaparse";
import  { TableColumn } from "react-data-table-component";

import FilterComponent from "./FilterComponent";
import TableComponent from "./TableComponent";

import "./styles.css";

export interface CsvData {
  number: number;
  mod3: number;
  mod4: number;
  mod5: number;
  mod6: number;
  [key: string]: number;
}

export interface CsvDataComponentProps {
  filterValues: Record<string, string[] | null>;
  handleModChange: (column: string, value: any) => void;
  getOptionsForColumn: (column: string) => { key: string }[];
  columns: TableColumn<CsvData>[];
  paginatedData: CsvData[];
  filteredData: CsvData[];
  PageSize: number;
  ScrollSize: number;
  currentPage: number;
  handlePageChange: (selectedPage: number) => void;
}

const CsvDataComponent: React.FC<CsvDataComponentProps>= ({/* Props destructuring */}) => {
  const [csvData, setCsvData] = useState<CsvData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
 

  const [ filterValues, setFilterValues ] = useState<Record<string, Array<string> | null>>({
    mod3: null,
    mod4: null,
    mod5: null,
    mod6: null,
  });
 
  
  const PageSize = 100; // Number of rows per page for pagination
  const ScrollSize = 20; // Number of rows to show in scrolling

//fetchng data from csv file using papapasre//------------------------------------------------------------//
  useEffect(() => {
    fetch("/dataset_small.csv")
      .then((response) => response.text())
      .then((data) => {
        const parseData: Papa.ParseResult<unknown> = Papa.parse(data, {
          header: true,
          skipEmptyLines: true,
        });

        if (parseData && parseData.data) {
          const validData: CsvData[] = parseData.data as CsvData[];
          setCsvData(validData);
        }
      });
  }, []);

  //for handling pagechange for pagination//---------------------------------------------------------------//
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };
 
  //defining table columns types//------------------------------------------------------------------//
  const columns: TableColumn<CsvData>[] = [
    { name: "Number", selector: (row) => row.number.toString(), sortable: true },
    { name: "mod3", selector: (row) => row.mod3.toString(), sortable: true },
    { name: "mod4", selector: (row) => row.mod4.toString(), sortable: true },
    { name: "mod5", selector: (row) => row.mod5.toString(), sortable: true },
    { name: "mod6", selector: (row) => row.mod6.toString(), sortable: true },
  ];

//handling filters applied on table//----------------------------------------------------------------------//
  const handleModChange = (column: string, values: any | null) => {
    
    let selectedValues: Array<string>  = values?.map((value: { key: any; }) => value.key)
    setFilterValues((prev) => ({
      ...prev,
      [column]: selectedValues,
    }));
  };

  //--------------------------------------//MOST-IMPORTANT-SECTION//---------------------------------------------//
  //added filter 
  //added filter to filter interaction

    const filteredData = useMemo(() => {

    // Check if any filter value is not null
    const anyFilterApplied = Object.values(filterValues).some((value) => value !== null && value !== undefined);
   
    if (anyFilterApplied) {
      const filtered = csvData.filter((row) => {
        if(filterValues["mod3"]?.includes(row.mod3.toString()) || 
           filterValues["mod4"]?.includes(row.mod4.toString()) || 
           filterValues["mod5"]?.includes(row.mod5.toString()) || 
           filterValues["mod6"]?.includes(row.mod6.toString())){
          return (
            (!filterValues["mod3"] || filterValues["mod3"].includes(row.mod3.toString())) &&
            (!filterValues["mod4"] || filterValues["mod4"].includes(row.mod4.toString())) &&
            (!filterValues["mod5"] || filterValues["mod5"].includes(row.mod5.toString())) &&
            (!filterValues["mod6"] || filterValues["mod6"].includes(row.mod6.toString()))
          )
        }
        
      });

      return filtered; //if filter applied then return filtered data
    } else {
      return csvData;  //else return default table
    }
  }, [csvData, filterValues]);

  //For Custom pagination------------------------------------------------------------//
  const paginatedData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [filteredData, currentPage, PageSize]);

  //For Fetching distinct value int multiselect dropdown--------------------------------//
  const getDistinctValues = (column: string): string[] => {
    const columnData = csvData.map((row) => row[column].toString());
    return Array.from(new Set(columnData));
  };

  //For fetching multiselect dropdown options-------------------------------------------//
  const getOptionsForColumn = (column: string): { key: string}[] => {
    const distinctValues = getDistinctValues(column);
    return distinctValues.map((value) => ({ key: value }));
  };


  return (
    <div>
      <h2 className="h2-container">Front End Filter Optimization</h2>

   
      {/* handles multiselect dropdown options and interact with table*/}
      <FilterComponent 
        filterValues={filterValues} 
        handleModChange={handleModChange}
        getOptionsForColumn={getOptionsForColumn}
      />
      {/* all the table data here*/}
      <TableComponent 
        columns={columns}
        paginatedData={paginatedData}
        filteredData={filteredData}
        PageSize={PageSize}
        ScrollSize={ScrollSize}
        currentPage={currentPage}
        handlePageChange={handlePageChange}/>
    </div>
  );
};

export default CsvDataComponent;
