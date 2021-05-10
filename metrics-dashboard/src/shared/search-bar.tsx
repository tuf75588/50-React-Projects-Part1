import React from 'react';
import '../css/Searchbar.css';
function SearchBar(): JSX.Element {
  return (
    <section className="search-bar">
      <div className="search-bar_label">
        <label htmlFor="stock-code">Search Stock Code:</label>
      </div>
      <input placeholder="STOCK CODE (e.g. AAPL)" />
      <button className="search-button">Search</button>
    </section>
  );
}
export default SearchBar;
