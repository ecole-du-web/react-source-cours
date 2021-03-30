import { useState } from "react";
import Item from "./Components/Item/Item";

function App() {
  const [dataArr, setDataArr] = useState([
    {nom: "Juliette"},
    {nom: "John"},
    {nom: "Joris"}
  ]);


  return (
    <div className="App">
        {dataArr.map((item, index) => {
          console.log(index);
          return <p key={index}>Nom : {item.nom}</p>
        })}
    </div>
  );
}

export default App;
