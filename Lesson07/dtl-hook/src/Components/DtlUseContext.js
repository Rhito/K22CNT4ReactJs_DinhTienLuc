import { createContext, useState } from "react";
import DtlUseContext1 from "./DtlUseContext1";

export const ThemeContext = createContext();
function DtlUseContext() {
  const [theme, setTheme] = useState("red");
  const dtlHandleClick = () => {
    setTheme(theme === "red" ? "blue" : "red");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h2>Demo useContext</h2>
        <DtlUseContext1 />
        <button onClick={dtlHandleClick}>Change bgColor</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default DtlUseContext;
