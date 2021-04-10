import React from 'react';
import ReactDOM from 'react-dom';
import Header from './shared/header'
import './index.css';
import MetaContent from './shared/meta_info';

function App() {
  return (
    <div>
      <Header />
      <MetaContent />
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

