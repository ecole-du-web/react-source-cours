import { useState } from "react";
import Item from "./Components/Item/Item";

function App() {
  const [toggle, setToggle] = useState(false);

  const changeState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      {toggle && <h1>Le state est True</h1>}
      <button onClick={changeState}>Change state</button>
    </div>
  );
}

export default App;
