npm install file-saver
==========
import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const DownloadTable = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    // Add more data as needed
  ]);

  const downloadTable = () => {
    // Convert the table data to a CSV string
    const csvContent = tableData.map(row => Object.values(row).join(',')).join('\n');
    
    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    
    // Use file-saver to save the Blob as a file
    saveAs(blob, 'table_data.csv');
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={downloadTable}>Download Table</button>
    </div>
  );
};

export default DownloadTable;
