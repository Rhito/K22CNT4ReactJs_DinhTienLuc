import "./App.css";
import DtlUseContext from "./Components/DtlUseContext";
import DtlUseEffect from "./Components/DtlUseEffect";
import DtlUseState from "./Components/DtlUseState";
import "./App.css";

function App() {
  return (
    <div className="App container border mt-3 ">
      <h1 className="text-center">Đinh Tiến Lực- hook</h1>
      <DtlUseState />
      <hr />
      <DtlUseEffect />
      <hr />
      <DtlUseContext />
    </div>
  );
}

export default App;
