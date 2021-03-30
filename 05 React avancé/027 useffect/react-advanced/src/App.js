import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [dataComponent, setDataComponent] = useState(1);
  const [dataComponent2, setDataComponent2] = useState(1);
  const [dataComponent3, setDataComponent3] = useState(1);

  useEffect(() => {
    console.log("dataComponent changed");
  }, [])

  const changeState = () => {
    setDataComponent3(dataComponent3 + 1)
  }

  return (
    <div className="App">
      <h1>Le state est {dataComponent3}</h1>
      <button onClick={changeState}>Change State</button>
    </div>
  );
}

export default App;
