import "./App.css";
import Weather from "./Weather";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>this is a weather app</h1>
      <Weather />
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
