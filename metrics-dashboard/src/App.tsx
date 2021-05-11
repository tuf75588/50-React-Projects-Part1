import React from 'react';
import FilterStock from './shared/filter-area';
import SearchBar from './shared/search-bar';
import StockChart from './shared/stock-chart';

function App() {
  const [stockCode, setStockCode] = React.useState<string>('');
  const [chosenCode, setChosenCode] = React.useState<string>('');
  const handleStockCodeChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setStockCode(value);
  const reset = () => setStockCode('');
  return (
    <div className="app_container">
      <div className="row app-container_row">
        <div className="app-container_left">
          <SearchBar
            code={stockCode}
            update={handleStockCodeChange}
            setChosen={setChosenCode}
            reset={reset}
          />
          <FilterStock />
        </div>
        <div className="app-container_right">
          <StockChart chosenStock={chosenCode} />
        </div>
      </div>
      <pre>{stockCode}</pre>
    </div>
  );
}

export default App;
