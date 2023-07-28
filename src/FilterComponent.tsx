import React from "react";
import Multiselect from "multiselect-react-dropdown";

export interface FilterComponentProps{
    filterValues: Record<string, string[] | null>; 
    handleModChange: (column: string, value: any |null)=>void;
    getOptionsForColumn: (column: string) => { key: string }[]; 
}

const FilterComponent: React.FC<FilterComponentProps>= ({filterValues,handleModChange,getOptionsForColumn}) =>{
    
    return(
        <div className="filter-container"> 
            
        <Multiselect
            displayValue="key"
            options={getOptionsForColumn("mod3")}
            showCheckbox
            placeholder="Click me[mod 3]"
            onSelect={(selectedOptions: any) =>{
                handleModChange("mod3", selectedOptions.length > 0 ? selectedOptions : null)
            }}
            onRemove={(removedOptions: any) =>{
            handleModChange("mod3", removedOptions.length > 0 ? removedOptions : null)
            }}
        />
    
        <Multiselect
            displayValue="key"
            options={getOptionsForColumn("mod4")}
            showCheckbox
            placeholder="Click me[mod 4]"
            onSelect={(selectedOptions: any) =>{
                handleModChange("mod4", selectedOptions.length > 0 ? selectedOptions : null)
            }}
            onRemove={(removedOptions: any) =>{
                handleModChange("mod4", removedOptions.length > 0 ? removedOptions : null)
            }}/>

        <Multiselect
            displayValue="key"
            options={getOptionsForColumn("mod5")}
            showCheckbox
            placeholder="Click me[mod 5]"
            onSelect={(selectedOptions: any) =>{
                handleModChange("mod5", selectedOptions.length > 0 ? selectedOptions : null)
            }}
            onRemove={(removedOptions: any) =>{
                handleModChange("mod5", removedOptions.length > 0 ? removedOptions : null)
            }}/>

        <Multiselect
            displayValue="key"
            options={getOptionsForColumn("mod6")}
            showCheckbox
            placeholder="Click me[mod 6]"
            onSelect={(selectedOptions: any) =>{
                handleModChange("mod6", selectedOptions.length > 0 ? selectedOptions : null)
            }}
            onRemove={(removedOptions: any) =>{
                handleModChange("mod6", removedOptions.length > 0 ? removedOptions : null)
            }}/>

        </div>
    )
}

export default FilterComponent;