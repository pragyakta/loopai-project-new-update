// FilterComponent.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import FilterComponent,{FilterComponentProps} from "../FilterComponent";

interface ColumnOptions {
    key: string;
  }
  
  interface OptionsForColumn {
    [key: string]: ColumnOptions[];
  }

const optionsForColumn: OptionsForColumn={
  mod3: [
    { key: "0" },
    { key: "1" },
    { key: "2" },
    
  ],
  mod4: [
    { key: "0" },
    { key: "1" },
    { key: "2" },
    { key: "3" },
  ],
  mod5: [
    { key: "0" },
    { key: "1" },
    { key: "2" },
    { key: "3" },
  ],
  mod6: [
    { key: "0" },
    { key: "1" },
    { key: "2" },
    { key: "3" },
  ],
};

const mockFilterValues = {
  mod3: null,
  mod4: null,
  mod5: null,
  mod6: null,
};

const handleModChange = (column: string, values: any | null) => {
    const validColumn = column as keyof OptionsForColumn;
    action(`handleModChange(${validColumn}, ${JSON.stringify(values)})`)();
};

export default {
    component: FilterComponent,
    title: "FilterComponent",
  } as Meta;
  
  const Template: Story<FilterComponentProps> = (args) => <FilterComponent {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    filterValues: mockFilterValues,
    handleModChange,
    getOptionsForColumn: (column: string) => optionsForColumn[column],
  };
