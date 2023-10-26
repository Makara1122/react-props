import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Parent from './components/Parent';
import reportWebVitals from './reportWebVitals';
import ListChildComponent from './components/List';
import ES6ArrayMethod from './components/ES6ArrayMethod';
import KeysInReact from './components/KeysInReact';
import ViewDetail from './components/ViewDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ViewDetail />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
