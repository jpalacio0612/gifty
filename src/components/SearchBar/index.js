import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={({ target }) => setQuery(target.value)}
        placeholder="Buscar..."
        className="searchBar"
      />
      <button type="submit" className="button">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
