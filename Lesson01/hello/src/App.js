import logo from "./logo.svg";
import "./App.css";
import DTL from "./components/DTL";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ReactJ
        </a>
      </header>
      <DTL />
      <DTL email="lasnguyen06@gmail.com" phone="0372657743" />
      <DTL email="lasnguyen06@gmail.com" phone="0372657743" class="K22CNT4" />
    </div>
  );
}

export default App;
