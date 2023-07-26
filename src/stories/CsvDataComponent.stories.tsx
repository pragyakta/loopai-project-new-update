import React from 'react';
import CsvDataComponent, {CsvDataComponentProps, CsvData} from '../CsvDataComponent';

export default {
  title: 'Filtered Data',
  component: CsvDataComponent,
  args: {
    
  },
  argTypes: {
    paginatedData: { type: 'array' }, // Specify the type for the 'paginatedData' prop
  },
};

export const Base = (args: any) => <CsvDataComponent {...args} />;

export const Base2 = (args: CsvDataComponentProps) => <CsvDataComponent {...args} />;