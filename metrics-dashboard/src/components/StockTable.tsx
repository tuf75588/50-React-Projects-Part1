import React from 'react';
import { stock } from '../apis/index';

// this component will receive a stock code through props, we will run the useEffect callback
// every time this code changes (when user searches for a new symbol)

// for later we might render a chart for better visualization of how the stock is performing

type StockTableProps = {
  stockSymbol: string;
};

function StockTable({ stockSymbol }: StockTableProps) {
  const [tableData, setTableData] = React.useState({ o: '' });
  const [status, setStatus] = React.useState('idle');
  React.useEffect(() => {
    stock
      .get('quote', {
        params: {
          token: process.env.REACT_APP_API_KEY,
          symbol: stockSymbol,
        },
      })
      .then((response) => {
        setStatus('loading');
        setTableData(response.data);
        setStatus('success');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setStatus('idle');
      });
  }, [stockSymbol]);
  if (status === 'loading') return <h1>loading..</h1>;
  console.log(tableData);
  return (
    <div>
      {/* flex container -- COLUMN  */}
      <div className="stock-table-header-row">
        <div>
          <ul className="stock-table-data-info">
            <li>Opening price</li>
            <li>High Price</li>
            <li>Low Price</li>
            <li>Current Price</li>
            <li>Previous Closing Price</li>
          </ul>
          <ul className="stock-table-data-info stock-prices">
            <li className="stock-price-item">${tableData.o}</li>
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
