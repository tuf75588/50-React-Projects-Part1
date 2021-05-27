import React from 'react';

type GraphProps<T> = {
  data: T;
};

function StockGraph(props: GraphProps<number>) {
  return <div style={{ marginTop: '2rem' }}>stock graph {props.data}</div>;
}

export default StockGraph;
