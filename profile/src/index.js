import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Gallery from './components/Profile';
import TodoList from './components/TodoList';
import Profile from './components/PassPropToComponent';
import Avatar from './components/PassPropToComponent';
import Counter5 from './components/Counter5';
import App5 from './components/App5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Gallery/>
    <TodoList />
    <Avatar size={150} person={{name:'Katsuko Saruhashi',imageId:'YfeOqp2'}}/>
        <Avatar size={50} person={{ 
            name: 'Lin Lanying',
            imageId: '1bX5QH6'
          }}/>
          <Avatar  size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }} />
        <Counter5/>
        <App5/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
