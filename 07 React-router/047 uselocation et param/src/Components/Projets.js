import React from "react";
import { useHistory, useParams } from "react-router-dom";

export default function Projets() {
  
  const history = useHistory();
  const {slug} = useParams();

  console.log(slug);

  return (
    <>
      <h1>Section PROJETS</h1>
      <p>{slug}</p>
      <button
      onClick={() => history.push('/')}
      >GO TO HOME</button>
    </>
  );
}
