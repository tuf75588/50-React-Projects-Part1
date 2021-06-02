import React from 'react';
import ReactDOM from 'react-dom';
import Question from './components/question';
import './index.css';

const Heading = () => <h1>Thank you for your feedback</h1>;
const qs: string[] = ['question1', 'question2', 'question3', 'question4'];
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
