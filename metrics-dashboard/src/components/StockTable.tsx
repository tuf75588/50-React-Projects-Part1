import React from 'react';
import { stock } from '../apis/index';

// this component will receive a stock code through props, we will run the useEffect callback
// every time this code changes (when user searches for a new symbol)

// for later we might render a chart for better visualization of how the stock is performing

type StockTableProps = {
  stockSymbol: string;
};

function StockTable({ stockSymbol }: StockTableProps) {
  return <div>{stockSymbol} </div>;
}

export default StockTable;
