import {useState, useEffect} from 'react'
import './App.css';
import Timer from './Timer'

function App() {


  const [toggle, setToggle] = useState(true);


  const toggleFunc = () => {
    setToggle(!toggle)
  }
  
  return (
    <div className="App">

        <button onClick={toggleFunc}>Toggle</button>
        {toggle && <Timer />}
    </div>
  );
}

export default App;
