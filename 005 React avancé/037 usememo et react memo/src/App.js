import { useState, useEffect, useRef, useMemo } from "react";
import "./App.css";
import Content from './Content'

function App() {
  const [toggle, setToggle] = useState([1,2,3]);

  const toggleFunc = () => {
    const newArr = [...toggle];
    newArr.push(4);

    setToggle(newArr);
  };

  const tableau = useMemo(() => {
    return [1,2,3,4]
  }, [])

  return (
    <div className="App">
      <Content num={tableau}/>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
