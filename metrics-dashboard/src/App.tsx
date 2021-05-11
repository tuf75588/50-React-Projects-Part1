import React from 'react';
import FilterStock from './shared/filter-area';
import SearchBar from './shared/search-bar';
import StockChart from './shared/stock-chart';

function App() {
  return (
    <div className="app_container">
      <div className="row app-container_row">
        <div className="app-container_left">
          <SearchBar />
          <FilterStock />
        </div>
        <div className="app-container_right">
          <StockChart />
        </div>
      </div>
    </div>
  );
}

export default App;
