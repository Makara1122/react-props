import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './components/Clock';
import Profile from './App';
import Avatar from './components/Avatar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Clock time={10} />
    <Profile />
    <Avatar 
        size={10}
        person={{
            name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
        />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
