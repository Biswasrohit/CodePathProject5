// Dashboard.jsx
import React from "react";

const Dashboard = ({ characters }) => {
  const totalCharacters = characters.length;

  // Example: Calculate average character name length
  const avgNameLength = totalCharacters
    ? characters.reduce((acc, char) => acc + char.name.length, 0) /
      totalCharacters
    : 0;

  return (
    <div className="dashboard">
      <div className="stat-box">
        <h3>{totalCharacters}</h3>
        <p>Total Characters</p>
      </div>
      <div className="stat-box">
        <h3>{avgNameLength.toFixed(2)}</h3>
        <p>Average Name Length</p>
      </div>
    </div>
  );
};

export default Dashboard;
