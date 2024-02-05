import "./App.css";

function App() {
  return (
    <div className="App">
      {
        <button
          style={{ fontSize: "16px", padding: "10px 20px" }}
          onClick={() => {
            alert("clicked");
          }}
        >
          Generate your travel plan now!
        </button>
      }
    </div>
  );
}

export default App;
