import "./App.css";
import Weather from "./Weather";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="app-aesthetic">
      <h1>this is a weather app</h1>
      <Weather />
      <br />
      <br />
      <a href="https://https://github.com/laurenbrownie/weather-react">
        view source code
      </a>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
