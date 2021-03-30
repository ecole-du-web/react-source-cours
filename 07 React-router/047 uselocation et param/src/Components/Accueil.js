import React from "react";
import { Link } from "react-router-dom";

export default function Accueil() {
  return (
    <>
      <h1>Bienvenue ACCUEIL</h1>
        <Link
        to={{
            pathname: "/Contact",
            state: {
                txt: "Voilà des données"
            }
        }}
        >
        Aller à la section Contact
        </Link>
    </>
  );
}
