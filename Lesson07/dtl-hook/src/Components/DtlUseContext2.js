import { useContext } from "react";
import { ThemeContext } from "./DtlUseContext";

function DtlUseContext2() {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme + " m-3"}>
      <h3>DtlUseContext2</h3>
      <p>2210900038</p>
      <b>Đinh Tiến Lực</b>
      <i>K22CNT4</i>
    </div>
  );
}

export default DtlUseContext2;
