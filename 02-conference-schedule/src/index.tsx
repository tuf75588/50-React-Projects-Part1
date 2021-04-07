import React from 'react';
import ReactDOM from 'react-dom';
import Header from './shared/header'
import './index.css';

function App() {
  return (
    <div>
      <Header />
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

