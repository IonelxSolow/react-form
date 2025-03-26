import React from "react";
import ArticlesList from "./components/ArticleList";

function App() {
  return (
    <>
      <h1>React-form</h1>
      <div className="container mt-4">
        <h2 className="mb-3">Lista Articoli</h2>
        <ul className="list-group">
          {ArticlesList.map((article) => (
            <li key={article.id} className="list-group-item">
              {article.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
