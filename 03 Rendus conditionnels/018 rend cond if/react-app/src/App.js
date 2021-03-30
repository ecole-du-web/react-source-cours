import { useState } from "react";
import Item from "./Components/Item/Item";

function App() {
  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle);
  };

  let toggleContenu;

  if (toggle) {
    toggleContenu = <h1>Le state est True</h1>;
  } else {
    toggleContenu = <h1>Le state est False</h1>;
  }


    return (
      {toggle ? 
      
      <div className="App">
        {toggleContenu}
        <button onClick={changeState}>Change state</button>
      </div>
      }
    );
  
}

export default App;
