import React from 'react';

type Questions = {
  questions: string;
};

function Question({ questions }: Questions) {
  console.log(questions);
  return <div className="question-container">{questions}</div>;
}

export default Question;
