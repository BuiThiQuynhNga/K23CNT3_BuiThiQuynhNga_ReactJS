import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BtqnApp from './BtqnApp';
import reportWebVitals from './reportWebVitals';

const BtqnRoot = ReactDOM.createRoot(document.getElementById('BtqnRoot'));
BtqnRoot.render(
  <React.StrictMode>
    <BtqnApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();