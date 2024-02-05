import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/landingPage.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          style={{ fontSize: "16px", padding: "10px 20px" }}
          onClick={() => {
            alert("clicked");
          }}
        >
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
