import React from 'react';

function GradingBar() {
  const grades = [0, 1, 2, 3, 4, 5].map((num, i) => (
    <button className="button-grade-num" key={num}>
      {num}
    </button>
  ));
  return <div className="customer-grade">{grades}</div>;
}
export default GradingBar;
