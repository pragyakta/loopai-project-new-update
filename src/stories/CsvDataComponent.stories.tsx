
import { useState,useMemo } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import CsvDataComponent, { CsvData,CsvDataComponentProps } from '../CsvDataComponent';
import React from 'react';



const meta: Meta<CsvDataComponentProps> = {
  component: CsvDataComponent,
};

export default meta;

type Story = StoryFn<CsvDataComponentProps>;




export const Default: Story = (args) => {
  const [csvData, setCsvData] = useState<CsvData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getDistinctValues = (column: string): string[] => {
    const columnData = csvData.map((row) => row[column].toString());
    return Array.from(new Set(columnData));
  };

  const getOptionsForColumn = (column: string): { key: string}[] => {
    const distinctValues = getDistinctValues(column);
    return distinctValues.map((value) => ({ key: value }));
  };

  const [filterValues, setFilterValues] = useState<Record<string, Array<string> | null>>({
    mod3: null,
    mod4: null,
    mod5: null,
    mod6: null,
  });
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
    
  const PageSize = 100;
   
  const paginatedData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [filteredData, currentPage, PageSize]);
    
    
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  

  

  return (
    <CsvDataComponent
      {...args}
    
      filterValues={filterValues}
      
      PageSize={PageSize}
      currentPage={currentPage}
      paginatedData={paginatedData}
      handlePageChange={handlePageChange}
    />
  );
 
};



