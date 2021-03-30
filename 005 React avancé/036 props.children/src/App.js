import { useState, useEffect, useRef } from "react";
import "./App.css";
import Content from './Content'

function App() {
  const [toggle, setToggle] = useState("abc");

  const toggleFunc = () => {
    const newArr = [...toggle];
    newArr.push(4);

    setToggle(newArr);
  };

  console.log("mise à jour");


  return (
    <div className="App">
      <Content>
        <h1>Titre de mon article 1</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Content>
      <Content>
        <h1>Titre de mon article 2</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Content>
      <Content>
        <h1>Titre de mon article 3</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Content>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
