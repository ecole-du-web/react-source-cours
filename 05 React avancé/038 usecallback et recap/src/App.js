import { useState, useEffect, useRef, useMemo, useCallback } from "react";
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
    return toggle
  }, [])

  const foo = useCallback(() => {
    console.log("click");
  }, [])

  return (
    <div className="App">
      <Content> 
        <h1>Je suis un child</h1>
      </Content>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
