import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// this is example 1

// class App2 extends React.Component {
//   onInChange(event) {
//     console.log(event.target.value);
//   }
//   render () {
//     return (
//       <div>
//       <form>
//         <label>Enter text</label>
//         <input
//         type='text' onChange={this.onInChange} />
//       </form>
//     </div>
//     )
//   }
// }

// this is example 2

// class App2 extends React.Component {
//   state = {inputValue: ''};

//   render() {
//     return(
//       <div>
//         <form>
//             <label>Enter text</label>
//             <input
//             type='text' value={this.setState.inputValue} 
//             onChange={(e) => this.setState({inputValue: e.target.value})}
//             />
//             </form>
//             <br/>
//           <div>
//           Entered text: {this.state.inputValue}
//           </div>
  
//       </div>
//     )
//   }
// }

// this is example 3




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
