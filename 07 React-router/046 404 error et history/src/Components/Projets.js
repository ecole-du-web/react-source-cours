import React from "react";
import { useHistory } from "react-router-dom";

export default function Projets() {
    
  const history = useHistory();

  return (
    <>
      <h1>Section PROJETS</h1>
      <button
      onClick={() => history.push('/')}
      >GO TO HOME</button>
    </>
  );
}
