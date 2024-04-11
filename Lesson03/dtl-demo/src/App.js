import logo from "./logo.svg";
import "./App.css";
import DTL_Func from "./Components/DTL_Func";
import DTL_class from "./Components/DTL_class";

function App() {
  const user = {
    userName: "k22cnt4",
    password: "123456",
    firstName: "Lực",
    lastName: "Đinh Tiến",
  };

  // Khai báo đối tượng hàm
  function formatName(users) {
    return (
      <h3>
        Xin chào,{users.lastName} {users.firstName}{" "}
      </h3>
    );
  }

  return (
    <div className="App">
      {/* Biểu thức jsx */}
      <div>
        <p>
          {" "}
          FullName: {user.lastName} {user.firstName}
        </p>
        {formatName(user)}
      </div>

      {/* Sử dụng function component */}
      <div>
        <DTL_Func />
        {/* Sử dụng FunC_Comp có props */}
        <DTL_Func userName="DTL" fullName="Đinh Tiến Lực" age="2000" />
      </div>

      {/* Sử dụng class component */}
      <DTL_class />

      <DTL_class company="Fit-NTU - K22CNT4" course="ReactJS" />
    </div>
  );
}

export default App;
