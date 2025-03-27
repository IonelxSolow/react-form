import { useState } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: "Introduzione a React" },
    { id: 2, title: "Guida a Vite e React" },
    { id: 3, title: "Utilizzare Bootstrap con React" },
    { id: 4, title: "Componenti e Props in React" },
  ]);

  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTitle.trim() === "") return;
    const newArticle = { id: articles.length + 1, title: newTitle };
    setArticles([...articles, newArticle]);
    setNewTitle("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Lista Articoli</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Inserisci titolo articolo"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Aggiungi
          </button>
        </div>
      </form>
      <ul className="list-group">
        {articles.map((article) => (
          <li key={article.id} className="list-group-item">
            {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
