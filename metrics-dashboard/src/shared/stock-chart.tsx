import React, { useEffect, useRef } from 'react';

function StockChart(): JSX.Element {
  const canvasRef = useRef(null);
  useEffect(() => {
    console.log(canvasRef);
  });
  return <canvas ref={canvasRef} />;
}

export default StockChart;
