import React, { useState } from 'react';

type Props = {
  setActiveStock: (value: string) => void;
};

function StockSearch({ setActiveStock }: Props) {
  const [stockInput, setStockInput] = useState<string>('');

  const handleClick = () => {
    setActiveStock(stockInput);
    setStockInput('');
  };
  return (
    <div className="search-wrapper">
      <div>
        <label htmlFor="search">Search by Stock Code:</label>
      </div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="AAPL, GME, etc.."
        onChange={(e) => setStockInput(e.currentTarget.value)}
        value={stockInput}
      />
      <button className="search-button" type="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default StockSearch;
