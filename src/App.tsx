import React from "react";
import CsvDataComponent,{CsvDataComponentProps} from "./CsvDataComponent";
import "./styles.css";

const App: React.FC = () => {
  const csvDataComponentProps: CsvDataComponentProps = {
    filterValues: {
      mod3: null,
      mod4: null,
      mod5: null,
      mod6: null,
    },
    handleModChange: (column: string, values: any | null) => {},
    getOptionsForColumn: (column: string) => [], 
    columns: [],
    paginatedData: [], 
    filteredData: [], 
    PageSize: 100, 
    ScrollSize: 20,
    currentPage: 1, 
    handlePageChange: (selectedPage: number) => {}, 
  };
  
  return (
    <div className="app-container">
      <h1 className="h1-container">
        DASHBOARD</h1>
        <CsvDataComponent {...csvDataComponentProps}/>
    </div>
  );
};

export default App;
