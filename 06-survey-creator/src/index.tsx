import React from 'react';
import ReactDOM from 'react-dom';
import Question from './components/question';
import './index.css';

const Heading = () => (
  <div>
    <h1>We would love your feedback</h1>
    <h3>Our goal is to make a platform that simplifies your workday.</h3>
    <h3>
      You've been using our software for a while now, and we'd love to know what
      you think about it.
    </h3>
    <h3>We really appreciate your feedback!</h3>
  </div>
);
const qs: string[] = [
  '* It was easy to setup the example application platform.',
  `* I've been able to find and use all the features I need.`,
  '* It was easy to sign up for the example application platform.',
  '* Based on my experience with the demo, I believe the example application software will help me save time at work.',
  '* I am considering purchasing the full version of this software.',
];
const App = () => (
  <div>
    <header className="header-thank-you">
      <Heading />
    </header>
    <section className="question-section">
      {/* this is a bad solution since each question is different */}
      {qs.map((q, i) => {
        return <Question questions={q} key={q} />;
      })}
    </section>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
