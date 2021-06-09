import React from 'react';
import GradingBar from './grading-bar';

type Questions = {
  questions: string;
};

function Question({ questions }: Questions) {
  console.log(questions);
  return (
    <div className="question-container">
      {questions}
      <GradingBar />
    </div>
  );
}

export default Question;
