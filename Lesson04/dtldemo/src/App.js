import "./App.css";
import DTL_EventForm1 from "./Components/DTL_EventForm1";
import DTL_EventForm2 from "./Components/DTL_EventForm2";
import DTL_EventForm4 from "./Components/DTL_EventForm4";
import DTL_EventFrom3 from "./Components/DTL_EventFrom3";

function App() {
  return (
    <div className="App">
      <h2>Event form demo</h2>
      <DTL_EventForm1 />
      <DTL_EventForm2 />
      <DTL_EventFrom3 />
      <DTL_EventForm4 name="kien 1123" />
    </div>
  );
}

export default App;
