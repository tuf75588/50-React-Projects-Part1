import React from 'react';

type DataProps = {
  data: {
    o: number;
    c: number;
    h: number;
    pc: number;
    l: number;
  };
};

function StockResults({ data }: DataProps) {
  return (
    <ul className="stock-table-data-info stock-prices">
      <li className="stock-price-item">${data.o}</li>
      <li className="stock-price-item">${data.h}</li>
      <li className="stock-price-item">${data.l}</li>
      <li className="stock-price-item">${data.c}</li>
      <li className="stock-price-item">${data.pc}</li>
    </ul>
  );
}

export default StockResults;
