import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <h1>React Counter</h1>
      <h2>{count}</h2>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>+ Increase</button>
        <button onClick={() => setCount(count - 1)}>- Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <button onClick={toggleDarkMode} className="toggle-dark">
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
