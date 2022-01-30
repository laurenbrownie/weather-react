import "./App.css";
import Weather from "./Weather";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
