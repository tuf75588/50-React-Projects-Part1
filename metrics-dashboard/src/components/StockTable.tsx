import React from 'react';
import { stock } from '../apis/index';

// this component will receive a stock code through props, we will run the useEffect callback
// every time this code changes (when user searches for a new symbol)

// for later we might render a chart for better visualization of how the stock is performing

type StockTableProps = {
  stockSymbol: string;
};

function StockTable({ stockSymbol }: StockTableProps) {
  return (
    <div>
      {/* flex container -- COLUMN  */}
      <div className="stock-table-header-row">
        <div>
          <ul className="stock-table-data-info">
            <li>Opening Price</li>
            <li>High Price</li>
            <li>Low Price</li>
            <li>Current Price</li>
            <li>Previous Closing Price</li>
          </ul>
          <ul className="stock-table-data-info stock-prices">
            <li className="stock-price-item">123.22</li>
            <li className="stock-price-item">123.22</li>
            <li className="stock-price-item">123.22</li>
            <li className="stock-price-item">123.22</li>
            <li className="stock-price-item">123.22</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StockTable;
