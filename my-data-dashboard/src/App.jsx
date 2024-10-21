import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import DataTable from "./components/DataTable.jsx";
import SearchFilter from "./components/SearchFilter.jsx";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  // Fetch data from Marvel API
  useEffect(() => {
    const fetchMarvelData = async () => {
      const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${
        import.meta.env.VITE_MARVEL_API_PUBLIC_KEY
      }`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCharacters(data.data.results); // Assume data.results holds the character array
        setFilteredCharacters(data.data.results);
      } catch (error) {
        console.error("Error fetching Marvel data:", error);
      }
    };

    fetchMarvelData();
  }, []);

  // Search handler
  const handleSearch = (searchTerm) => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Dashboard characters={characters} />
        <SearchFilter onSearch={handleSearch} />
        <DataTable characters={filteredCharacters} />
      </div>
    </div>
  );
};

export default App;
