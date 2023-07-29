import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
    //console.log(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter to Search Images for: </label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
