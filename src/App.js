import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import AddColor from './components/AddColor';
import Result from './components/Result';

function App() {
  const [boxes, setBoxes] = useState([]);
  var x;

  const ttt=(color)=>{
    x=[...boxes,color];

    setBoxes(x);
  }
  return (
    <div className="App">
      <AddColor  addNewColor={ttt}/>
      <Result colors={boxes}/>
      
    </div>
  );
}

export default App;
