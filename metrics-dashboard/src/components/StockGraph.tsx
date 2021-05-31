import React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

type DataProps = {
  values: {
    o: number;
    c: number;
    h: number;
    pc: number;
    l: number;
  };
};

function StockGraph({ values }: DataProps) {
  console.log(values);

  const data = {
    labels: [
      'Opening price',
      'High price',
      'Low price',
      'Current price',
      'Previous closing price',
    ],
    datasets: [
      {
        label: 'Stock value',
        data: [],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <div>
        <Line
          data={{
            labels: [
              'Opening price',
              'High price',
              'Low price',
              'Current price',
              'Previous closing price',
            ],
            datasets: [
              {
                label: 'Stock value',
                data: [values.o, values.h, values.l, values.c, values.pc],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
              },
            ],
          }}
          options={options}
          type="line"
        />
      </div>
    </div>
  );
}

export default StockGraph;
