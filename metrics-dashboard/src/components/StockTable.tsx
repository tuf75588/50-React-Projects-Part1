import React from 'react';
import { stock } from '../apis/index';
import Loading from './Loading';
import StockResults from './StockResults';

// this component will receive a stock code through props, we will run the useEffect callback
// every time this code changes (when user searches for a new symbol)

// for later we might render a chart for better visualization of how the stock is performing

type StockTableProps = {
  stockSymbol: string;
};

function StockTable({ stockSymbol }: StockTableProps) {
  const [tableData, setTableData] = React.useState<null | {}>(null);
  const [status, setStatus] = React.useState('idle');
  React.useEffect(() => {
    if (stockSymbol === '') return;
    setStatus('loading');
    stock
      .get('quote', {
        params: {
          token: process.env.REACT_APP_API_KEY,
          symbol: stockSymbol,
        },
      })
      .then((response) => {
        setTableData(response.data);
        setStatus('success');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [stockSymbol]);
  if (status === 'loading') return <Loading />;
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
          {tableData && <StockResults data={tableData} />}
        </div>
      </div>
    </div>
  );
}

export default StockTable;