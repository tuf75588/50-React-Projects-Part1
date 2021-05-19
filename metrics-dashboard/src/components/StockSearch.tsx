import React, { useState } from 'react';

type Props = {
  setActiveStock: (value: string) => void;
};

function StockSearch({ setActiveStock }: Props) {
  const [stockInput, setStockInput] = useState<string>('');
  const [error, setError] = useState('');
  const validStockCode: RegExp = /(\W|[0-9])/gm;
  const handleBadInput = validStockCode.test(stockInput);
  const handleClick = () => {
    if (handleBadInput) {
      setError('Input must be a valid stock symbol!');
    } else {
      setActiveStock(stockInput);
      setStockInput('');
      setError('');
    }
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
        onChange={(e) =>
          setStockInput(e.currentTarget.value.toLocaleUpperCase())
        }
        value={stockInput}
      />
      <button className="search-button" type="button" onClick={handleClick}>
        Search
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default StockSearch;
