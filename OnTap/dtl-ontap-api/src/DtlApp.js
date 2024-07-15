import { useEffect, useState } from "react";
import "./App.css";
import DtlListUser from "./Components/DtlListUser";
import axios from "./Api/dtlAxios";
import DtlFormTableName from "../../../TestExam/dtl2210900038-de01-app/src/dtl_components/DtlFormTableName";

function App() {
  const [dtlListUsers, setDtlListUsers] = useState();

  // Get data from ApI

  const dtlGetAllUsers = async () => {
    const dtlResponse = await axios.get("dtlUser");
    setDtlListUsers(dtlResponse.data);
  };

  // Call API once when render data
  useEffect(() => {
    dtlGetAllUsers();
  }, []);

  return (
    <div className="container border my-3">
      <h2 className="my-2">Ôn tập API</h2>
      <DtlListUser renderDtlListUsers={dtlListUsers} />
    </div>
  );
}

export default App;
