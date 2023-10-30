import logo from './logo.svg';
import './App.css';
import Counter from './components/Count';
import Counter2 from './components/Count2';
import App2 from './components/ClassComponent';
import App3 from './components/StateClass';
import App4 from './components/PropsClass';
import Example from './components/PropsClass';
import Counter3 from './components/ClickEvent';
import Counter4 from './components/Conditional';
import PropsDataPassing from './components/PropsDataPassing';
import ChildComponent from './components/PropsPassOneTowOther';
import PropsPassOneTowOther from './components/PropsPassOneTowOther';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Counter />
      <Counter2 />
      <App2 />
      <App3 />
      <Example/>
      <Counter3/>
      <Counter4 />
      <PropsDataPassing name ={'Mam Makara'}/>
      <PropsPassOneTowOther/>
      <UseState/>
      <UseEffect/>
    </div>
  );
}

export default App;
