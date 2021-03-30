import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "./App.css";
import useDimension from './useDimension'

function App() {

  const browserWidth = useDimension();
  // console.log(browserWidth);

  if(browserWidth > 772){
    console.log("Grand écran");
  } else {
    console.log("Petit écran");
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
