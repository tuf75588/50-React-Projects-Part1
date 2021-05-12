import React from 'react';
import { stock } from './apis';
import FilterStock from './shared/filter-area';
import SearchBar from './shared/search-bar';
import StockChart from './shared/stock-chart';

function App() {
  const [stockCode, setStockCode] = React.useState<string>('');
  const [chosenCode, setChosenCode] = React.useState<string>('');
  const [stockData, setStockData] = React.useState([]);
  const handleStockCodeChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setStockCode(value);
  const reset = () => setStockCode('');
  let startDate = Math.round(new Date().getTime() / 1000);
  let endDate = startDate - 72 * 3600;
  React.useEffect(() => {
    stock
      .get(`quote`, {
        params: {
          token: process.env.REACT_APP_API_KEY,
          symbol: chosenCode,
        },
      })
      .then((s) => {
        setStockData(s.data);
      });
  }, [chosenCode, setChosenCode]);

  React.useEffect(() => {
    if (!chosenCode) return;
    stock
      .get('stock/candle', {
        params: {
          token: process.env.REACT_APP_API_KEY,
          resolution: 5,
          from: endDate,
          to: startDate,
          symbol: chosenCode,
        },
      })
      .then((res) => {
        console.log(res);
      });
  }, [setChosenCode, chosenCode]);
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
          <StockChart />
        </div>
      </div>
      <pre>{stockCode}</pre>
      <pre>{JSON.stringify(stockData, null, 2)}</pre>
    </div>
  );
}

export default App;
