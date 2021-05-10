import React from 'react';
import FilterStock from './shared/filter-area';
import SearchBar from './shared/search-bar';

function App() {
  return (
    <div className="app-container_row">
      <div className="app_container">
        <div className="app-container_left">
          <SearchBar />
          <FilterStock />
        </div>
      </div>
    </div>
  );
}

export default App;
