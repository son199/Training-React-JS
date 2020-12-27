import logo from "./logo.svg";
import "./App.css";
import Test from './test'
function App() {
  const ElemtnsImg = () => {
    return <img src={logo} className="App-logo" alt="logo" />;
  };
 
  const obNam= [{
    name:'khhai',
    email : 'khaipham',
  },{
    name:'khhai',
    email : 'khaipham',
  }]
  return (
    <div className="App">
     <Test name={obNam} />
    </div>
  );
}

export default App;
