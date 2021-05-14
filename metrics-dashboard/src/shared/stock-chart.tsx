import React from 'react';

import { Line } from 'react-chartjs-2';
import '../css/StockChart.css';
const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

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

function StockChart({ graphData }: any): JSX.Element {
  return (
    <div className="card-container-graph graph card">
      <div className="card-body">
        <Line
          type="line"
          data={data}
          options={options}
          width={1249}
          className="line-graph"
        />
      </div>
    </div>
  );
}

export default StockChart;
