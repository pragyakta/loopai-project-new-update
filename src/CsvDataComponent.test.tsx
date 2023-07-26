{/*import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CsvDataComponent from "./CsvDataComponent";

// Mock fetch function to return a resolved Promise with dummy CSV data
global.fetch = jest.fn().mockResolvedValue({
  text: jest.fn().mockResolvedValue(
    `number,mod3,mod4,mod5,mod6
    12,0,0,1,0
    34,1,1,2,2
    36,2,2,3,4`
  ),
});
describe("CsvDataComponent", () => {
test("renders without data", async () => {
    render(<CsvDataComponent />);
  
    // Wait for the fetch and data processing to complete
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
  
    // Check if "No data available" message is displayed when there is no data
    const noDataMessage = screen.getByText("No data available");
    expect(noDataMessage).toBeInTheDocument();
  });

  test("filters data based on mod3 and mod4", async () => {
    render(<CsvDataComponent />);
  
    // Wait for the fetch and data processing to complete
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
  
    // Select options in the mod3 and mod4 dropdowns
    const mod3Dropdown = screen.getByText("mod 3");
    const mod4Dropdown = screen.getByText("mod 4");
    userEvent.click(mod3Dropdown);
    userEvent.click(screen.getByText("1"));
    userEvent.click(mod4Dropdown);
    userEvent.click(screen.getByText("2"));
  
    // Check if the filtered data is displayed correctly
    const filteredTableData = screen.getAllByRole("cell");
    expect(filteredTableData).toHaveLength(5); // 1 row * 5 columns
  
    // Check the content of the filtered table
    expect(filteredTableData[0]).toHaveTextContent("1");
    expect(filteredTableData[1]).toHaveTextContent("1");
    expect(filteredTableData[2]).toHaveTextContent("2");
    expect(filteredTableData[3]).toHaveTextContent("3");
    expect(filteredTableData[4]).toHaveTextContent("4");
  });
  test("displays data in multiple pages", async () => {
    render(<CsvDataComponent />);
  
    // Wait for the fetch and data processing to complete
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
  
    // Check if the table shows the correct number of rows per page
    const tableData = screen.getAllByRole("cell");
    expect(tableData).toHaveLength(15); // 3 rows * 5 columns
  
    // Navigate to the next page
    const nextPageButton = screen.getByText("Next");
    userEvent.click(nextPageButton);
  
    // Check if the table shows the correct number of rows on the next page
    const nextPageTableData = screen.getAllByRole("cell");
    expect(nextPageTableData).toHaveLength(5); // 1 row * 5 columns
  });
});*/}
export{};