import "./App.css";
import languages from "./data/languages";

function App() {
  return (
    <div className="container">
      <h1>Learn Web Development</h1>

      <div className="buttons">
        {languages.map((language) => (
          <button key={language.id}>{language.title}</button>
        ))}
      </div>

      <div className="card">
        <h2>{languages[0].title}</h2>
        <p>{languages[0].description}</p>
      </div>
    </div>
  );
}

export default App;
