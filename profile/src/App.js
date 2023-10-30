import logo from './logo.svg';
import './App.css';
import './index.css';
const person = {
  name: 'Mam Makara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

function App() {
  return (
    <div
    style={person.theme}
    >
      <h1>{person.name}'s Todos</h1>
      <img
      className='avatar'
      src='https://i.imgur.com/7vQD0fPs.jpg'
      alt='Mam Makara'
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

export default App;
