import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StockSearch from './components/StockSearch';
import StockTable from './components/StockTable';
import StockGraph from './components/StockGraph';
const App = () => {
  const [activeStock, setActiveStock] = useState('');
  return (
    <div className="home-container">
      <StockSearch setActiveStock={setActiveStock} />
      <StockTable stockSymbol={activeStock} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
TODO

1. create a container component
2. create an input component 
3. connect to finnhub based of what user types


*/
