import React from "react";
import CsvDataComponent, {CsvData} from "./CsvDataComponent";
import "./styles.css";

const App: React.FC = () => {
  const paginatedData: CsvData[] = []; 
  return (
    <div className="app-container">
      <h1 className="h1-container">
        DASHBOARD</h1>
        <CsvDataComponent paginatedData={paginatedData} />
    </div>
  );
};

export default App;
