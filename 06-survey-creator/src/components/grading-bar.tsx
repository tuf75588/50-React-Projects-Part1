import React from 'react';

function GradingBar() {
  const grades = [0, 1, 2, 3, 4, 5].map((num, i) => (
    <button className="button-grade-num" key={num}>
      {num}
    </button>
  ));
  return (
    <div className="grade-container">
      <div>
        <p className="customer-grade">{grades}</p>
      </div>
      <div className="agree-disagree">
        <p>disagree</p>
        <p>agree</p>
      </div>
    </div>
  );
}
export default GradingBar;
