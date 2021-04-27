import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Form.css";
import Navbar from "../../Components/Navbar/Navbar";

export default function Form() {
  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    const newArticle = {
      title: article.title,
      body: article.body,
    };

    dispatch({
      type: "ADDARTICLE",
      payload: article,
    });

    setArticle({
      title: "",
      body: "",
    })
  };

  const addNewTitle = (e) => {
    const newObjState = { ...article, title: e.target.value };
    setArticle(newObjState);
  };

  const addNewBody = (e) => {
    const newObjState = { ...article, body: e.target.value };
    setArticle(newObjState);
  };

  return (
    <>
      <Navbar />
      <h1 className="title-form">Écrivez un article</h1>
      <form className="container-form" onSubmit={handleForm}>
        <label htmlFor="title">Titre</label>
        <input
          value={article.title}
          onInput={addNewTitle}
          type="text"
          id="title"
          placeholder="Entrez votre nom"
        />

        <label htmlFor="article">Votre article</label>
        <textarea
          value={article.body}
          onInput={addNewBody}
          id="article"
          placeholder="Votre article"
        ></textarea>

        <button>Envoyer l'article</button>
      </form>
    </>
  );
}
