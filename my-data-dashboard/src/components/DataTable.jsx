// DataTable.jsx
import React from "react";

const DataTable = ({ characters }) => {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.id}>
              <td>{character.name}</td>
              <td>{character.description || "No description available"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
