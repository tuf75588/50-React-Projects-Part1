import React from 'react';

type DataProps = {
  o: number;
  c: number;
  h: number;
  pc: number;
  l: number;
};

function StockResults({ data }: any) {
  console.log(data.c);
  return (
    <ul className="stock-table-data-info stock-prices">
      <li className="stock-price-item">{data.o}</li>
      <li className="stock-price-item"></li>
      <li className="stock-price-item"></li>
      <li className="stock-price-item"></li>
      <li className="stock-price-item"></li>
    </ul>
  );
}

export default StockResults;
