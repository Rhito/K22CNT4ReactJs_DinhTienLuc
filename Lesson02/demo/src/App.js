import logo from "./logo.svg";
import "./App.css";
import Func_JSX_DinhTienLuc from "./Components/Func_JSX_DinhTienLuc";
import Class_JSX_DinhTienLuc from "./Components/Class_JSX_DinhTienLuc";
function App() {
  return (
    <div className="App">
      <Func_JSX_DinhTienLuc />
      <Func_JSX_DinhTienLuc fullname="Đinh Tiến Lực" age="20" />
      <Class_JSX_DinhTienLuc />
      <hr />

      <Class_JSX_DinhTienLuc infor="Học ReactJS" time="quacquac" />
    </div>
  );
}

export default App;
