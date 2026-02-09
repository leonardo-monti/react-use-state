import "./App.css";
import { useState } from "react";
import languages from "./data/languages";

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  return (
    <div className="container">
      <h1>Learn Web Development</h1>

      <div className="buttons">
        {languages.map((language) => (
          <button key={language.id} onClick={() => setSelectedLanguage(language)}>
            {language.title}</button>
        ))}
      </div>

      <div className="card">
        <h2>{selectedLanguage.title}</h2>
        <p>{selectedLanguage.description}</p>
      </div>
    </div>
  );
}

export default App;

