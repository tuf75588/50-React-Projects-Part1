import React, { useEffect, useRef } from 'react';

type Props = {
  chosenStock: string;
};

function StockChart({ chosenStock }: Props): JSX.Element {
  const canvasRef = useRef(null);
  useEffect(() => {});
  return (
    <div className="card-container-graph card">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default StockChart;
